"use client"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import MintSection from "@/components/mint-section"

function MintPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <WhyDeFAISection />
      <StrategiesSection />
      <HowItWorksSection />
      <MintSection />
    </div>
  )
}

export default MintPage

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-black text-white">
      {/* Abstract grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-full border-r border-white/10" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-full border-b border-white/10" />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-white/5 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-l from-white/5 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Logo/Badge */}
        <div className="inline-flex items-center justify-center px-4 py-2 mb-6 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="text-sm font-medium tracking-wider text-gray-300">BELIEF-POWERED NFT AGENTS</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">DeFAI Mint</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light">
          Vibe Trading as NFT. Trade What you Believe.
        </p>

        {/* CTA Button */}
        <div className="mt-12 flex flex-col items-center">
          <Button
            onClick={() => {
              document.getElementById("mint-section")?.scrollIntoView({ behavior: "smooth" })
            }}
            className="group relative px-8 py-6 text-lg bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-xl"
          >
            Start Minting
            <ArrowDown className="ml-2 inline-block h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>

          <div className="mt-4 text-sm text-gray-500">NFT = Wallet × Signer × AI Agent</div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent rounded-full" />
      </div>
    </section>
  )
}

function WhyDeFAISection() {
  return (
    <section className="w-full py-24 px-4 bg-black">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Why DeFAI Mint?</h2>
        <p className="text-xl text-gray-300 leading-relaxed">
          NFTs that hold beliefs. Agents that act on them. Solana makes it real.
        </p>
        <div className="w-16 h-px bg-gray-800 mx-auto mt-8"></div>
      </div>
    </section>
  )
}

function StrategiesSection() {
  return (
    <section className="w-full py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-center mb-16">
          Sample Belief Strategies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Strategy Card 1 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Trump Confident NFT</h3>
            <p className="text-gray-400">Trades based on the momentum of Trump-related content.</p>
          </div>

          {/* Strategy Card 2 */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:bg-gray-900/70 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4">Solana Forever NFT</h3>
            <p className="text-gray-400">A maximalist strategy focused solely on Solana tokens.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section className="w-full py-24 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-center mb-16">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="text-center">
            <div className="text-4xl mb-6">🧠</div>
            <h3 className="text-xl font-bold text-white mb-3">Choose Belief</h3>
            <p className="text-gray-400">Pick a strategy that reflects your conviction.</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="text-4xl mb-6">🪙</div>
            <h3 className="text-xl font-bold text-white mb-3">Mint the NFT</h3>
            <p className="text-gray-400">One click to launch your AI agent.</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="text-4xl mb-6">📈</div>
            <h3 className="text-xl font-bold text-white mb-3">Let It Invest</h3>
            <p className="text-gray-400">Your agent trades. You stay present.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
