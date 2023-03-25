import React, { useState, useEffect } from "react";
import {
  AccountSectionContainer,
  AccountContainer,
  AccountHeading,
  ButtonContainer,
  Header,
  Subheader,
  CalculateContainer,
  CardsContainer,
  Card,
  CardHeader,
  CardContent,
  CardWrongNetwork,
  Spacer,
  CardCalculateEarningsContainer,
  CardContainerAlt,
  SlideWrapper,
  SlideContainer,
  Slider,
  SliderLabel,
  SliderLabelContainer,
  CardCalculateEarningsWrapper,
  PrincipleAmountInput,
} from "../../styles/DApp_styles/AccountSection.style";
import { ethers } from "ethers";
import ConnectWeb3Button from "./ConnectWeb3Button";
import { useWeb3ModalNetwork, Web3Button } from "@web3modal/react";
import { useAccount, useContractRead, useBalance } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";

function AccountSection({
  isProduction,
  accumulatorTokenContractConfig,
  totalSupply,
  price,
}) {
  const { address, isConnected } = useAccount();
  const { selectedChain } = useWeb3ModalNetwork();
  const [days, setDays] = useState(30);
  const [rate, setRate] = useState(0.01);
  const [amountHeld, setAmountHeld] = useState("");
  const [balance, setBalance] = useState(0);

  const isConnectedToSupportedNetwork = () => {
    if (isProduction) {
      return isConnected && selectedChain?.id === bsc.id;
    }
    return isConnected && selectedChain?.id === bscTestnet.id;
  };

  function labelFor(days) {
    if (days < 30) {
      return Number(days).toFixed() + (days !== "1" ? " Days" : " Day");
    } else if (days < 365) {
      const months = Number(days / 30).toFixed();
      return months + (months !== "1" ? " Months" : " Month");
    } else {
      const years = Number(days / 365).toFixed();
      return years + (years !== "1" ? " Years" : " Year");
    }
  }

  function projectedAmount(amount, rate, days) {
    let p = amount;
    let r = rate;
    let t = days;

    return p * (1 + r) ** t;
  }

  const { data: balanceData } = useBalance({
    address: address,
    token: accumulatorTokenContractConfig.address,
    watch: true,
  });

  useEffect(() => {
    if (balanceData) {
      setBalance(Number(balanceData?.formatted));
    }
  }, [balanceData]);

  const { data: rewardYieldData } = useContractRead({
    address: accumulatorTokenContractConfig.emissionRecipientAddress,
    abi: accumulatorTokenContractConfig.EmissionRecipientABI,
    functionName: "rate",
  });

  useEffect(() => {
    if (rewardYieldData) {
      setRate(Number(ethers.utils.formatEther(rewardYieldData)) * 28000);
    }
  }, [rewardYieldData]);

  return (
    <AccountSectionContainer>
      <AccountContainer>
        <AccountHeading>
          <Header>Account{isConnected}</Header>
          <Subheader>
            {isConnected ? (
              <Web3Button icon={"hide"} balance={"hide"} />
            ) : (
              <Spacer />
            )}
          </Subheader>
        </AccountHeading>
        <CardsContainer>
          <Card
            width={"407px"}
            mobileWidth={"80%"}
            height={"513px"}
            mobileHeight={"100%"}
            ai={""}
            jc={"space-evenly"}
          >
            {!isConnected ? (
              <ButtonContainer>
                <ConnectWeb3Button />
              </ButtonContainer>
            ) : (
              !isConnectedToSupportedNetwork() && (
                <CardWrongNetwork>{`Change Network to ${bsc.name}`}</CardWrongNetwork>
              )
            )}
            {isConnectedToSupportedNetwork() && (
              <>
                <CardContainerAlt>
                  <CardHeader>Your Wallet</CardHeader>
                  <CardContent>
                    {balance} {accumulatorTokenContractConfig.tokenSymbol}
                  </CardContent>
                  <Subheader>
                    ≈{" "}
                    {Number(balance * price).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                    USD
                  </Subheader>
                </CardContainerAlt>
                <CardContainerAlt>
                  <CardHeader>Earn Per Day</CardHeader>
                  <CardContent>
                    {Number(balance * rate).toLocaleString(undefined, {
                      maximumFractionDigits: "2",
                    })}{" "}
                    {accumulatorTokenContractConfig.tokenSymbol}
                  </CardContent>
                  <Subheader>
                    ≈{" "}
                    {Number(balance * rate * price).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                    USD
                  </Subheader>
                </CardContainerAlt>
                <CardContainerAlt>
                  <CardHeader>Earn Per Month</CardHeader>
                  <CardContent>
                    {Number(
                      projectedAmount(balance, rate, 30) - balance
                    ).toLocaleString(undefined, {
                      maximumFractionDigits: "2",
                    })}{" "}
                    {accumulatorTokenContractConfig.tokenSymbol}
                  </CardContent>
                  <Subheader>
                    ≈{" "}
                    {Number(
                      (projectedAmount(balance, rate, 30) - balance) * price
                    ).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                    USD
                  </Subheader>
                </CardContainerAlt>
              </>
            )}
          </Card>
        </CardsContainer>
      </AccountContainer>
      <CalculateContainer>
        <Header>Calculate Earnings</Header>
        <Subheader>
          <Spacer />
        </Subheader>
        <CardsContainer>
          <Card
            width={"650px"}
            mobileWidth={"80%"}
            height={"513px"}
            mobileHeight={"100%"}
            padding={"0 5%"}
          >
            <CardCalculateEarningsWrapper>
              <CardCalculateEarningsContainer>
                <CardContainerAlt>
                  <CardHeader>Principle Amount</CardHeader>
                  <CardContent>
                    <PrincipleAmountInput
                      type="number"
                      min="1"
                      max="1000000"
                      step="1"
                      placeholder="1000"
                      value={amountHeld}
                      onChange={(e) =>
                        e.currentTarget.value <= totalSupply &&
                        setAmountHeld(e.currentTarget.value)
                      }
                    />
                  </CardContent>
                </CardContainerAlt>
                <CardContainerAlt>
                  <CardHeader>Daily Interest Rate</CardHeader>
                  <CardContent>{rate * 100}%</CardContent>
                </CardContainerAlt>
              </CardCalculateEarningsContainer>
              <SlideWrapper>
                <CardHeader>Held for Period</CardHeader>
                <SlideContainer>
                  <Slider
                    type={"range"}
                    min={"1"}
                    max={"730"}
                    value={days}
                    onChange={(e) => setDays(e.currentTarget.value)}
                  ></Slider>
                  <SliderLabelContainer>
                    <SliderLabel>{labelFor(days)}</SliderLabel>
                  </SliderLabelContainer>
                </SlideContainer>
              </SlideWrapper>
              <CardCalculateEarningsContainer>
                <CardContainerAlt>
                  <CardHeader>Projected Amount</CardHeader>
                  <CardContent>
                    {Number(
                      projectedAmount(
                        amountHeld ? amountHeld : 1000,
                        rate,
                        days
                      )
                    ).toFixed(2)}{" "}
                    {accumulatorTokenContractConfig.tokenSymbol}
                  </CardContent>
                </CardContainerAlt>
                <CardContainerAlt>
                  <CardHeader>Projected Value</CardHeader>
                  <CardContent>
                    $
                    {Number(
                      projectedAmount(
                        amountHeld ? amountHeld : 1000,
                        rate,
                        days
                      ) * price
                    ).toFixed(2)}
                  </CardContent>
                </CardContainerAlt>
              </CardCalculateEarningsContainer>
            </CardCalculateEarningsWrapper>
          </Card>
        </CardsContainer>
      </CalculateContainer>
    </AccountSectionContainer>
  );
}

export default AccountSection;
