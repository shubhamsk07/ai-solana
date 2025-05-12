'use client';
import { BaseWalletMultiButton, WalletConnectButton, WalletIcon, WalletModal, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 px-20 ">
 <h1 className="text-xl font-semibold text-[#ffffffe9]">🧠 Solana AI</h1>

        <WalletMultiButton className="text-blue-400" />
    </nav>
  );
}