import React, { useEffect } from "react";
import { ethers } from "ethers";
import { useContractRead } from "wagmi";

function LoadBlockchainData({
  setTotalSupply,
  setBurned,
  accumulatorTokenContractConfig,
}) {
  const { data: totalSupplyData } = useContractRead({
    address: accumulatorTokenContractConfig.address,
    abi: accumulatorTokenContractConfig.AccumulatorABI,
    functionName: "totalSupply",
  });

  useEffect(() => {
    if (totalSupplyData) {
      setTotalSupply(Number(ethers.utils.formatEther(totalSupplyData)));
    }
  }, [setTotalSupply, totalSupplyData]);

  const { data: burnData } = useContractRead({
    address: accumulatorTokenContractConfig.address,
    abi: accumulatorTokenContractConfig.AccumulatorABI,
    functionName: "totalBurned",
  });

  useEffect(() => {
    if (burnData) {
      setBurned(Number(ethers.utils.formatEther(burnData)));
    }
  }, [burnData, setBurned]);

  return <></>;
}

export default LoadBlockchainData;
