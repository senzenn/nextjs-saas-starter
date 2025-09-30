# Solana Next.js Boilerplate

A simple and clean boilerplate for Solana wallet integration with Next.js, React, and TypeScript. Perfect starting point for building Solana dApps.

## Features

- **Wallet Connection**: Connect with popular Solana wallets (Phantom, Solflare)
- **Wallet Information**: View connected wallet details, public key, and balance
- **Transaction Sending**: Send SOL transactions to other addresses
- **Airdrop Request**: Request SOL airdrops on devnet for testing
- **Modern UI**: Clean, responsive interface built with Tailwind CSS and shadcn/ui
- **TypeScript**: Full type safety throughout the application

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with wallet provider
│   ├── page.tsx            # Main page with wallet integration
│   └── globals.css         # Global styles
├── components/
│   ├── solana/
│   │   ├── wallet-button.tsx    # Wallet connect/disconnect button
│   │   ├── wallet-info.tsx      # Wallet information display
│   │   ├── send-transaction.tsx  # SOL transaction component
│   │   └── airdrop.tsx           # Airdrop request component
│   └── ui/                 # Reusable UI components
└── lib/
    ├── solana/
    │   └── wallet-provider.tsx  # Wallet context provider
    └── utils.ts            # Utility functions
```

## Solana Integration

This project uses the official Solana wallet adapter libraries:

- `@solana/wallet-adapter-react` - React hooks for wallet integration
- `@solana/wallet-adapter-react-ui` - Pre-built UI components
- `@solana/wallet-adapter-wallets` - Wallet adapters for popular wallets
- `@solana/web3.js` - Solana JavaScript SDK

## Supported Wallets

- Phantom
- Solflare
- (More wallets can be easily added)

## Network

Currently configured for Solana Devnet. To change the network, update the `network` variable in `lib/solana/wallet-provider.tsx`.

## License

MIT