"use client"

import { Button } from "@/components/ui/button"

interface NFTCardProps {
  name: string
  strategy: string
  ideology: string
  notes: string
}

const nftCards: NFTCardProps[] = [
  {
    name: "SOL_MAXIMIZER",
    strategy:
      "Stake SOL via Kamino → Convert to LST (e.g., bSOL) → Reinvest into DeFi protocols. APY is continuously monitored for reallocation.",
    ideology: "Solana is the future. Maximizing SOL is the righteous path.",
    notes: "Auto-transfer to CEX or hardware wallet upon reaching thresholds.",
  },
  {
    name: "BTC_HODLER",
    strategy: "Periodic wBTC purchases → Lend for passive income. Low-risk, long-term BTC accumulation.",
    ideology: "In Bitcoin we trust.",
    notes: "Same auto-transfer option as above.",
  },
  {
    name: "STABLE_OPTIMIZER",
    strategy: "Monitor and reallocate USDC/USDT yields across Kamino, Solend, and MarginFi.",
    ideology: "Stablecoins are the intelligent choice. Grow capital without price volatility.",
    notes: "Same auto-transfer option as above.",
  },
  {
    name: "TRUMP_CONFIDENTOR",
    strategy: "Monitor Trump's X posts in real time → Snipe related meme tokens using AI.",
    ideology: "Trump embodies crypto freedom. Those who believe, profit.",
    notes: "Requires AI agent for real-time signal processing.",
  },
  {
    name: "SOLANA_BLUECHIPER",
    strategy:
      "Automatically monitor Solana NFT floor prices (e.g., MadLads, Tensorians) and snipe undervalued entries.",
    ideology: "Solana NFTs are singular. All-in on their future.",
    notes: "Auto-transfer supported. Risk limits can be configured.",
  },
]

function NFTCard({ name, strategy, ideology, notes }: NFTCardProps) {
  return (
    <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-gray-700 hover:bg-gray-900/40 flex flex-col h-full">
      {/* Placeholder Image */}
      <div className="aspect-square w-full bg-gray-800/50 rounded-xl mb-6 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-600 text-sm font-medium">
          {name} NFT PREVIEW
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      {/* NFT Name */}
      <h3 className="text-xl font-bold text-white mb-4">{name}</h3>

      {/* Strategy */}
      <div className="mb-4">
        <span className="text-gray-400 text-sm font-medium block mb-1">STRATEGY</span>
        <p className="text-gray-300 text-sm">{strategy}</p>
      </div>

      {/* Ideology */}
      <div className="mb-4">
        <span className="text-gray-400 text-sm font-medium block mb-1">IDEOLOGY</span>
        <p className="text-gray-300 text-sm italic">"{ideology}"</p>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <span className="text-gray-400 text-sm font-medium block mb-1">NOTES</span>
        <p className="text-gray-300 text-sm">{notes}</p>
      </div>

      {/* Mint Button - pushing to bottom with flex-grow */}
      <div className="mt-auto">
        <Button
          className="w-full py-5 bg-white/10 text-white rounded-xl border border-white/20 
                    hover:bg-white/15 transition-all duration-300"
        >
          Mint Now
        </Button>
      </div>
    </div>
  )
}

export default function MintSection() {
  return (
    <section id="mint-section" className="w-full py-24 px-4 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">Mint Your NFT Agent</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your belief, confirm, and launch your AI-powered trading agent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftCards.map((card, index) => (
            <NFTCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
