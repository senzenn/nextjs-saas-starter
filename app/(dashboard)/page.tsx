import { WalletButton } from '@/components/solana/wallet-button';
import { WalletInfo } from '@/components/solana/wallet-info';
import { Button } from '@/components/ui/button';
import { ArrowRight, Wallet, Zap, Shield } from 'lucide-react';

export default function HomePage() {
  return (
    <main>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-8 w-8 rounded-md bg-orange-500 text-white mr-3">
                <Wallet className="h-5 w-5" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Solana BPF Client</h1>
            </div>
            <WalletButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Solana BPF
                <span className="block text-orange-500">Program Client</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Interact with your Solana BPF programs seamlessly. Connect your wallet,
                manage transactions, and explore the power of Solana blockchain.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <WalletButton />
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <WalletInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Wallet className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Wallet Integration
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Connect with popular Solana wallets like Phantom and Solflare
                  for seamless blockchain interactions.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  BPF Program Support
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Built specifically for Solana BPF programs with optimized
                  transaction handling and program interaction.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                <Shield className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-900">
                  Secure & Reliable
                </h2>
                <p className="mt-2 text-base text-gray-500">
                  Enterprise-grade security with proper transaction validation
                  and error handling for production use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Ready to interact with Solana?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Connect your wallet and start interacting with Solana BPF programs.
                Built with modern web technologies and Solana best practices.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <WalletButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
