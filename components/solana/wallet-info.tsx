'use client';

import { useState, useEffect } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Card } from '@/components/ui/card';
import { Copy, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

export function WalletInfo() {
  const { publicKey, connected } = useWallet();
  const { connection } = useConnection();
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if (publicKey) {
      connection.getBalance(publicKey).then((bal) => {
        setBalance(bal);
      });
    }
  }, [publicKey, connection]);

  if (!connected || !publicKey) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">Connect your wallet to view account information</p>
      </Card>
    );
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Wallet Information</h3>
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium text-gray-700">Public Key</label>
          <div className="flex items-center gap-2 mt-1">
            <code className="flex-1 bg-gray-100 p-2 rounded text-sm break-all">
              {publicKey.toString()}
            </code>
            <Button
              size="sm"
              variant="outline"
              onClick={() => copyToClipboard(publicKey.toString())}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Explorer</label>
          <div className="mt-1">
            <Button
              size="sm"
              variant="outline"
              onClick={() => window.open(`https://explorer.solana.com/address/${publicKey.toString()}?cluster=devnet`, '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              View on Solana Explorer
            </Button>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Balance</label>
          <p className="mt-1 text-lg font-medium">
            {balance !== null ? (balance / LAMPORTS_PER_SOL).toFixed(4) : 'Loading...'} SOL
          </p>
        </div>

      </div>
    </Card>
  );
}