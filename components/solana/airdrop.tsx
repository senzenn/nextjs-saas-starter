'use client';

import { useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, XCircle } from 'lucide-react';

export function Airdrop() {
  const { publicKey } = useWallet();
  const { connection } = useConnection();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [txSignature, setTxSignature] = useState('');

  const handleAirdrop = async () => {
    if (!publicKey) return;

    setLoading(true);
    setStatus('idle');

    try {
      const signature = await connection.requestAirdrop(publicKey, 2 * LAMPORTS_PER_SOL);
      await connection.confirmTransaction(signature, 'processed');
      setTxSignature(signature);
      setStatus('success');
    } catch (error) {
      console.error('Airdrop failed:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (!publicKey) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">Connect your wallet to request airdrop</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Request Airdrop (Devnet)</h3>
      <Button
        onClick={handleAirdrop}
        disabled={loading}
        className="w-full mb-4"
      >
        {loading ? 'Requesting...' : 'Request 2 SOL'}
      </Button>

      {status === 'success' && (
        <div className="flex items-center gap-2 p-3 bg-green-50 text-green-800 rounded-lg">
          <CheckCircle className="h-5 w-5" />
          <div>
            <p className="font-medium">Airdrop successful!</p>
            <a
              href={`https://explorer.solana.com/tx/${txSignature}?cluster=devnet`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline"
            >
              View on Solana Explorer
            </a>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-800 rounded-lg">
          <XCircle className="h-5 w-5" />
          <p className="font-medium">Airdrop failed. Please try again.</p>
        </div>
      )}
    </Card>
  );
}

