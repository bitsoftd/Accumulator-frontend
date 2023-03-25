import React, { useState, useCallback, useEffect } from "react";
import LoadBlockchainData from "./LoadBlockchainData";
import Header from "../Header";
import TitleHeadline from "./TitleHeadline";
import GlobalMetrics from "./GlobalMetrics";
import AccountSection from "./AccountSection";
import Footer from "../Footer";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { bsc, bscTestnet } from "wagmi/chains";
import { Web3Modal } from "@web3modal/react";
import config from "././../../config/config.json";
import AccumulatorABI from "../../abi/AccumulatorABI.json";
import EmissionRecipientABI from "../../abi/EmissionRecipientABI.json";
import AccumulatorRebasingABI from "../../abi/AccumulatorRebasingABI.json";

export const projectId = process.env.REACT_APP_PUBLIC_WALLET_CONNECT_ID;
export const mainnetContractAddress =
  process.env.REACT_APP_MAINNET_CONTRACT_ADDRESS;
export const testnetContractAddress =
  process.env.REACT_APP_TESTNET_CONTRACT_ADDRESS;
export const mainTokenTradingPair =
  process.env.REACT_APP_MAIN_TOKEN_TRADING_PAIR_ADDRESS;
export const mainnetTokenStakingAddress =
  process.env.REACT_APP_MAINNET_STAKING_ADDRESS;
export const mainnetTokenEmissionAddress =
  process.env.REACT_APP_MAINNET_EMISSION_RECIPIENT_ADDRESS;
export const isProductionENV = process.env.REACT_APP_IS_BSC_MAINNET;
export const isProduction = JSON.parse(isProductionENV.toLowerCase()); // JSON.parse Converts ENV variable string to boolean. StackOverflow recommended this method.

const chains = isProduction ? [bsc] : [bscTestnet];
const rpcNode = isProduction
  ? "https://bsc-dataseed2.binance.org"
  : "https://data-seed-prebsc-2-s3.binance.org:8545";
const contractAddress = isProduction
  ? mainnetContractAddress
  : testnetContractAddress;

const { provider } = configureChains(chains, [
  jsonRpcProvider({
    rpc: () => ({
      http: rpcNode,
    }),
  }),
  walletConnectProvider({ projectId }),
]);
export const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    appName: "web3Modal",
    chains,
  }),
  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);

function DApp() {
  const [price, setPrice] = useState(0.0);
  const [totalSupply, setTotalSupply] = useState(5000000);
  const [burned, setBurned] = useState(0);

  // Had to add to this last minute due to the fact that the direction of this project is way different than what I started out with
  const accumulatorTokenContractConfig = {
    address: contractAddress,
    tokenSymbol: config.TOKEN_SYMBOL,
    AccumulatorABI,
    emissionRecipientAddress: mainnetTokenEmissionAddress,
    EmissionRecipientABI,
    accumulatorRebasingAddress: mainnetTokenStakingAddress,
    AccumulatorRebasingABI,
  };

  const getPriceUsd = useCallback(async () => {
    if (isProduction) {
      fetch(
        `https://api.dexscreener.com/latest/dex/pairs/bsc/${mainTokenTradingPair}`
      )
        .then((res) => res.json())
        .then((json) => {
          setPrice(json.pair.priceUsd);
          setTimeout(getPriceUsd, 30000);
        });
    }
  }, []);

  useEffect(() => {
    getPriceUsd();
  }, [getPriceUsd]);

  return (
    <div>
      <WagmiConfig client={wagmiClient}>
        <LoadBlockchainData
          setTotalSupply={setTotalSupply}
          setBurned={setBurned}
          accumulatorTokenContractConfig={accumulatorTokenContractConfig}
        />
        <Header />
        <TitleHeadline />
        <GlobalMetrics
          price={price}
          contractAddress={contractAddress}
          supply={totalSupply}
          burned={burned}
          tokenSymbol={accumulatorTokenContractConfig.tokenSymbol}
        />
        <AccountSection
          isProduction={isProduction}
          accumulatorTokenContractConfig={accumulatorTokenContractConfig}
          contractAddress={contractAddress}
          totalSupply={totalSupply}
          price={price}
        />
        <Footer />
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode={"dark"}
      />
    </div>
  );
}

export default DApp;
