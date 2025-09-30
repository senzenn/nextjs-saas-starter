import { WalletButton } from '@/components/solana/wallet-button';
import { WalletInfo } from '@/components/solana/wallet-info';
import { SendTransaction } from '@/components/solana/send-transaction';
import { Airdrop } from '@/components/solana/airdrop';
import { Wallet } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-orange-500 text-white mr-3">
                <Wallet className="h-5 w-5" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Solana Wallet</h1>
            </div>
            <WalletButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
              Simple Solana
              <span className="block text-orange-500">Wallet Integration</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Connect your Solana wallet and interact with the blockchain.
              Built with modern web technologies and Solana best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Connect Wallet</h2>
                <p className="text-gray-600 mb-4">
                  Connect with popular Solana wallets like Phantom and Solflare
                  to start interacting with the Solana blockchain.
                </p>
                <WalletButton />
              </div>

              <SendTransaction />
            </div>

            <div className="space-y-6">
              <WalletInfo />
              <Airdrop />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}