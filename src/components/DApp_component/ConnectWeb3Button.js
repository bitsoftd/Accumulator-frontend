import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { ConnectWalletButton } from "../../styles/DApp_styles/ConnectWeb3Button.style";

export default function ConnectWeb3Button() {
  const [loading, setLoading] = useState(false);
  const { open } = useWeb3Modal();

  async function onOpen() {
    setLoading(true);
    await open();
    setLoading(false);
  }

  return (
    <ConnectWalletButton
      onClick={async () => {
        await onOpen();
      }}
      disabled={loading}
    >
      Connect Wallet
    </ConnectWalletButton>
  );
}
