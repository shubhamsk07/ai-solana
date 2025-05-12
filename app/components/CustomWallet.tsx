'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { shortenAddress } from '../lib/utils';
import { useMemo, useState } from 'react';

export default function CustomWalletMultiButton() {
  const { connected, connecting, publicKey, connect, disconnect, wallets } = useWallet();
  const [showMenu, setShowMenu] = useState(false);

  const address = useMemo(() => publicKey ? shortenAddress(publicKey.toBase58()) : '', [publicKey]);

  if (connecting) return <button className="px-4 py-2 rounded bg-gray-500 text-white">Connecting...</button>;

  return (
    <div className="relative">
      {!connected ? (
        <button
          onClick={() => connect()}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl"
        >
          Connect Wallet
        </button>
      ) : (
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="bg-black text-white px-4 py-2 rounded-xl"
        >
          {address}
        </button>
      )}

      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow-xl z-50">
          <button
            onClick={() => disconnect()}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Disconnect
          </button>
          {/* Optional: Add wallet switcher or recent wallets */}
        </div>
      )}
    </div>
  );
}
