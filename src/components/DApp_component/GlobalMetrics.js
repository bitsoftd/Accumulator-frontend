import React from "react";
import {
  GlobalMetricsContainer,
  GlobalMetricsHeading,
  GlobalMetricsHeader,
  CardsContainer,
  Card,
  CardHeader,
  CardContent,
} from "../../styles/DApp_styles/GlobalMetrics.style";

function GlobalMetrics({ price, supply, burned, tokenSymbol }) {
  return (
    <GlobalMetricsContainer>
      <GlobalMetricsHeading>
        <GlobalMetricsHeader>Global Metrics</GlobalMetricsHeader>
      </GlobalMetricsHeading>
      <CardsContainer>
        <Card>
          <CardHeader>Market Cap</CardHeader>
          <CardContent>
            {Number(supply * price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Total {tokenSymbol} Burned</CardHeader>
          <CardContent>
            {Number(burned).toLocaleString(undefined, {
              maximumFractionDigits: "2",
            })}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>{tokenSymbol} Value Burned</CardHeader>
          <CardContent>
            {Number(burned * price).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </CardContent>
        </Card>
      </CardsContainer>
    </GlobalMetricsContainer>
  );
}

export default GlobalMetrics;
