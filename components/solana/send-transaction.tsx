'use client';

import { useState } from 'react';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Send, CheckCircle, XCircle } from 'lucide-react';

export function SendTransaction() {
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [txSignature, setTxSignature] = useState('');

  const handleSendTransaction = async () => {
    if (!publicKey || !recipient || !amount) return;

    setLoading(true);
    setStatus('idle');

    try {
      // Validate recipient address
      const recipientPubkey = new PublicKey(recipient);
      
      // Create transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: recipientPubkey,
          lamports: parseFloat(amount) * LAMPORTS_PER_SOL,
        })
      );

      // Get recent blockhash
      const { blockhash } = await connection.getLatestBlockhash();
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = publicKey;

      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      setTxSignature(signature);
      setStatus('success');
      
      // Reset form
      setRecipient('');
      setAmount('');
    } catch (error) {
      console.error('Transaction failed:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (!publicKey) {
    return (
      <Card className="p-6 text-center">
        <p className="text-gray-500">Connect your wallet to send transactions</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Send className="h-5 w-5 mr-2" />
        Send SOL
      </h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="recipient">Recipient Address</Label>
          <Input
            id="recipient"
            type="text"
            placeholder="Enter Solana address..."
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="mt-1"
          />
        </div>
        
        <div>
          <Label htmlFor="amount">Amount (SOL)</Label>
          <Input
            id="amount"
            type="number"
            step="0.001"
            placeholder="0.001"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1"
          />
        </div>
        
        <Button 
          onClick={handleSendTransaction}
          disabled={loading || !recipient || !amount}
          className="w-full"
        >
          {loading ? 'Sending...' : 'Send Transaction'}
        </Button>
        
        {status === 'success' && (
          <div className="flex items-center gap-2 p-3 bg-green-50 text-green-800 rounded-lg">
            <CheckCircle className="h-5 w-5" />
            <div>
              <p className="font-medium">Transaction successful!</p>
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
            <p className="font-medium">Transaction failed. Please try again.</p>
          </div>
        )}
      </div>
    </Card>
  );
}