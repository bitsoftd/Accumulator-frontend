import React from "react";
import {
  TokenomicsContainer,
  TokenomicsHeading,
  TokenomicsText,
  Rectangle,
  Border,
  TokenomicsCardWrapper,
  TokenomicsCardHeader,
  TokenomicsCardHeading,
  TokenomicsCardBody,
  TokenomicsCardText,
  TokenomicsCardInnerBottomContainer,
  TokenomicsCardHorizontalContainer,
} from "../styles/Tokenomics.style";

// You can add an object to the array, and it will render a new component for you
const tokenomicsItems = [
  {
    weekTitle: "Week 1-2",
    rebaseDescription: "2% rebase per day",
    rebaseDescription2: "PSM turned on after Week 9",
    buyTaxPercentage: "10%",
    sellTaxPercentage: "15%",
  },
  {
    weekTitle: "Week 3-4",
    rebaseDescription: "1.5% rebase per day",
    rebaseDescription2: "PSM turned on after Week 9",
    buyTaxPercentage: "5%",
    sellTaxPercentage: "10%",
  },
  {
    weekTitle: "Week 5-6",
    rebaseDescription: "1% rebase per day",
    rebaseDescription2: "PSM turned on after Week 9",
    buyTaxPercentage: "5%",
    sellTaxPercentage: "5%",
  },
  {
    weekTitle: "Week 7+",
    rebaseDescription: ".5% rebase",
    rebaseDescription2: "PSM turned on after Week 9",
    buyTaxPercentage: "0%",
    sellTaxPercentage: "5%",
  },
];

const TokenomicsItemComponent = ({
  index,
  weekTitle,
  rebaseDescription,
  rebaseDescription2,
  buyTaxPercentage,
  sellTaxPercentage,
}) => {
  return (
    <>
      <TokenomicsCardWrapper>
        <TokenomicsCardHeader>
          <TokenomicsCardHeading>{weekTitle}</TokenomicsCardHeading>
        </TokenomicsCardHeader>
        <TokenomicsCardBody>
          <TokenomicsCardText>
            {rebaseDescription}
            <br />
            {weekTitle !== "Week 7+" ? (
              <span style={{ visibility: "hidden" }}>{rebaseDescription2}</span>
            ) : (
              rebaseDescription2
            )}
          </TokenomicsCardText>
        </TokenomicsCardBody>
        <TokenomicsCardHorizontalContainer>
          <TokenomicsCardInnerBottomContainer>
            <TokenomicsCardHeading>{buyTaxPercentage}</TokenomicsCardHeading>
            <TokenomicsCardText>Buy Tax</TokenomicsCardText>
          </TokenomicsCardInnerBottomContainer>
          <TokenomicsCardInnerBottomContainer>
            <TokenomicsCardHeading>{sellTaxPercentage}</TokenomicsCardHeading>
            <TokenomicsCardText>Sell Tax</TokenomicsCardText>
          </TokenomicsCardInnerBottomContainer>
        </TokenomicsCardHorizontalContainer>
      </TokenomicsCardWrapper>
      {index !== tokenomicsItems.length - 1 ? <Border /> : null}
    </>
  );
};

export default function Tokenomics() {
  return (
    <TokenomicsContainer>
      <TokenomicsHeading>TOKENOMICS</TokenomicsHeading>
      <TokenomicsText>
        2% daily rewards distributed equally to all holders
      </TokenomicsText>
      <Rectangle>
        {tokenomicsItems.map((tokenomicsItem, index) => (
          <TokenomicsItemComponent
            key={index}
            index={index}
            weekTitle={tokenomicsItem.weekTitle}
            rebaseDescription={tokenomicsItem.rebaseDescription}
            rebaseDescription2={tokenomicsItem.rebaseDescription2}
            buyTaxPercentage={tokenomicsItem.buyTaxPercentage}
            sellTaxPercentage={tokenomicsItem.sellTaxPercentage}
          />
        ))}
      </Rectangle>
    </TokenomicsContainer>
  );
}
