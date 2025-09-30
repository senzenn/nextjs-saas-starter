'use client';

import { WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { Button } from '@/components/ui/button';
import { Wallet, LogOut } from 'lucide-react';

export function WalletButton() {
  const { connected, publicKey } = useWallet();

  if (connected && publicKey) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-800 rounded-lg">
          <Wallet className="h-4 w-4" />
          <span className="text-sm font-medium">
            {publicKey.toString().slice(0, 4)}...{publicKey.toString().slice(-4)}
          </span>
        </div>
        <WalletDisconnectButton className="!bg-red-600 hover:!bg-red-700 !text-white !rounded-lg !px-3 !py-2">
          <LogOut className="h-4 w-4 mr-2" />
          Disconnect
        </WalletDisconnectButton>
      </div>
    );
  }

  return (
    <WalletMultiButton className="!bg-orange-600 hover:!bg-orange-700 !text-white !rounded-lg !px-4 !py-2">
      <Wallet className="h-4 w-4 mr-2" />
      Connect Wallet
    </WalletMultiButton>
  );
}