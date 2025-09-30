# Solana BPF Client

A modern Next.js client application for interacting with Solana BPF programs. Built with wallet integration, transaction handling, and a clean, responsive UI.

## Features

- 🔗 **Wallet Integration**: Connect with popular Solana wallets (Phantom, Solflare)
- ⚡ **BPF Program Support**: Optimized for Solana BPF program interactions
- 🎨 **Modern UI**: Clean, responsive design with Tailwind CSS
- 🛡️ **Secure**: Proper transaction validation and error handling
- 🚀 **Fast**: Built with Next.js 15 and modern React patterns

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Solana wallet (Phantom, Solflare, etc.)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Run the development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Wallet Connection

1. Click "Connect Wallet" in the header
2. Select your preferred wallet from the modal
3. Approve the connection in your wallet
4. Start interacting with Solana BPF programs!

## Project Structure

```
client/
├── app/                    # Next.js app directory
│   ├── (dashboard)/       # Dashboard pages
│   └── layout.tsx         # Root layout with wallet provider
├── components/
│   ├── solana/            # Solana-specific components
│   │   ├── wallet-button.tsx
│   │   └── wallet-info.tsx
│   └── ui/                # Reusable UI components
├── lib/
│   └── solana/            # Solana utilities and providers
│       └── wallet-provider.tsx
└── package.json
```

## Technologies Used

- **Next.js 15**: React framework with App Router
- **@solana/web3.js**: Solana JavaScript SDK
- **@solana/wallet-adapter**: Wallet connection utilities
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **Lucide React**: Beautiful icons

## Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server

### Environment Variables

No environment variables are required for basic functionality. The app connects to Solana devnet by default.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.