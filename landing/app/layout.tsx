import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DeFAI Mint – Belief-Driven NFT Agents',
  description:
    'Mint an NFT. Let it invest. Live your life. Belief meets automation, powered by Solana.',
  generator: 'DeFAI Mint',
  metadataBase: new URL('https://defaimint.vercel.app'),
  openGraph: {
    title: 'DeFAI Mint – Belief-Driven NFT Agents',
    description:
      'DeFAI Mint turns NFTs into AI-powered investing agents. No wallet setup. No config. Just mint.',
    url: 'https://defaimint.vercel.app',
    siteName: 'DeFAI Mint',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DeFAI Mint OGP',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFAI Mint – Belief-Driven NFT Agents',
    description:
      'Mint your belief. Own your strategy. Powered by AI × Solana.',
    creator: '@kyohei_nft',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
