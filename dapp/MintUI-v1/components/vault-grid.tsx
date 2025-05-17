"use client"

import { useState } from "react"
import VaultCard from "./vault-card"
import MintModal from "./mint-modal"

// Vault data
const vaults = [
  {
    id: 1,
    title: "Trump Support",
    description:
      "Back your political conviction with a strategy that invests in sectors expected to thrive under conservative policies.",
    strategies: ["Meme Sniper", "MAGA Tokens"],
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 2,
    title: "Climate Justice",
    description:
      "Support environmental action with a strategy focused on renewable energy and sustainable technology investments.",
    strategies: ["Green Tech", "Carbon Credits"],
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 3,
    title: "Capitalism Skeptic",
    description:
      "Express your economic perspective with a strategy that hedges against market volatility and corporate dominance.",
    strategies: ["DeFi Yield", "Community Tokens"],
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: 4,
    title: "Tech Optimist",
    description:
      "Channel your belief in technological progress with a strategy investing in cutting-edge innovation and AI development.",
    strategies: ["SOL/BTC DCA", "AI Tokens"],
    image: "/placeholder.svg?height=120&width=120",
  },
]

export default function VaultGrid() {
  const [selectedVault, setSelectedVault] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMintClick = (vault) => {
    setSelectedVault(vault)
    setIsModalOpen(true)
  }

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Available Belief Vaults</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {vaults.map((vault) => (
          <VaultCard key={vault.id} vault={vault} onMintClick={() => handleMintClick(vault)} />
        ))}
      </div>

      {selectedVault && <MintModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} vault={selectedVault} />}
    </section>
  )
}
