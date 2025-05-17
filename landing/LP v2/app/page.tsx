"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Twitter } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
            DeFAI Mint
          </span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#why" className="hover:text-gray-300 transition-colors">
            Why
          </a>
          <a href="#vaults" className="hover:text-gray-300 transition-colors">
            Vaults
          </a>
          <a href="#how" className="hover:text-gray-300 transition-colors">
            How It Works
          </a>
          <a href="#faq" className="hover:text-gray-300 transition-colors">
            FAQ
          </a>
        </div>
        <Button
          disabled
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full px-6 py-2 font-medium"
        >
          Coming Soon
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
          Your Belief. Executed.
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl text-gray-300">
          Mint NFTs that represent your convictions and automatically trigger DeFi strategies on Solana. Your beliefs,
          backed by financial action.
        </p>
        <Button
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full px-8 py-6 text-lg font-medium"
          onClick={() => {
            document.getElementById("vaults")?.scrollIntoView({
              behavior: "smooth",
            })
          }}
        >
          Explore Belief Vaults
          <ChevronDown className="ml-2 h-5 w-5" />
        </Button>
      </section>

      {/* Why Belief Matters */}
      <section id="why" className="container mx-auto py-20 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Invest with Conviction, Not Confusion.</h2>
          <ul className="space-y-4 text-xl text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span> Crypto is chaotic.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span> AI tools are powerful, but out of reach.
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span> DeFAI Mint simplifies it all into one truth: what you believe should drive
              what you own.
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-black flex items-center justify-center">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12Z"
                  fill="url(#paint0_linear)"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9333EA" />
                    <stop offset="0.5" stopColor="#EC4899" />
                    <stop offset="1" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Available Belief Vaults */}
      <section id="vaults" className="container mx-auto py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Available Belief Vaults</h2>
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl">
          {/* Trump Bet Vault */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Trump Bet</h3>
              <div className="text-orange-500 text-2xl">🔸</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">Meme Tokens</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">MAGA Alpha</span>
            </div>
            <p className="text-gray-300 mb-6">
              Bet on conservative narratives. This vault targets meme tokens and narratives thriving under right-wing
              momentum.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                10 USDC
              </Button>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                100 USDC
              </Button>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                1000 USDC
              </Button>
            </div>
            <Button
              disabled
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full py-2 font-medium"
            >
              Mint Trump NFT
            </Button>
          </div>

          {/* Solana Forever Vault */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">Solana Forever</h3>
              <div className="text-blue-500 text-2xl">🔹</div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">SOL/BTC DCA</span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-sm">LST Yield</span>
            </div>
            <p className="text-gray-300 mb-6">
              Back your belief in Solana's long-term dominance. This vault DCA's into SOL, BTC, and yield-bearing LSTs.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                10 USDC
              </Button>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                100 USDC
              </Button>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                1000 USDC
              </Button>
            </div>
            <Button
              disabled
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full py-2 font-medium"
            >
              Mint Solana NFT
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="container mx-auto py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How DeFAI Mint Works</h2>
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 shadow-lg">
            <div className="text-4xl mb-4">🗳️</div>
            <h3 className="text-xl font-bold mb-2">1. Choose a belief vault</h3>
            <p className="text-gray-300">Select a vault that aligns with your ideological beliefs</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 shadow-lg">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-2">2. Select mint amount</h3>
            <p className="text-gray-300">Choose how much you want to invest in your belief</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800 shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-2">3. Let your AI NFT invest</h3>
            <p className="text-gray-300">Your NFT automatically executes DeFi strategies based on your belief</p>
          </div>
        </div>
      </section>

      {/* Who is it For */}
      <section className="container mx-auto py-20 px-4 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Who is DeFAI Mint for?</h2>
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg">
            <div className="text-4xl mb-4">🧑‍💼</div>
            <h3 className="text-xl font-bold mb-2">The Believer</h3>
            <p className="text-gray-300">For those who want to invest with purpose and conviction</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg">
            <div className="text-4xl mb-4">🧑‍🎓</div>
            <h3 className="text-xl font-bold mb-2">The Beginner</h3>
            <p className="text-gray-300">No prior experience, no wallet needed to get started</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-lg">
            <div className="text-4xl mb-4">🧑‍💻</div>
            <h3 className="text-xl font-bold mb-2">The Degenerate</h3>
            <p className="text-gray-300">New gateway to DeFi x AI alpha for experienced traders</p>
          </div>
        </div>
      </section>

      {/* Security & Tech Stack */}
      <section className="container mx-auto py-20 px-4 flex flex-col items-center bg-gray-950 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Built for Transparency. Secured by Design.</h2>
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mr-4 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-950 flex items-center justify-center">
                  <span className="text-white">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Runs on Solana – fast and battle-tested</h3>
                <p className="text-gray-400">Leverage the speed and low cost of Solana's blockchain</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mr-4 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-950 flex items-center justify-center">
                  <span className="text-white">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Powered by Metaplex Execute & AgentKit</h3>
                <p className="text-gray-400">Built on proven Solana infrastructure</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mr-4 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-950 flex items-center justify-center">
                  <span className="text-white">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">NFT is signer, wallet, and strategy container</h3>
                <p className="text-gray-400">Your NFT acts as your on-chain identity and strategy executor</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center mr-4 flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-gray-950 flex items-center justify-center">
                  <span className="text-white">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">No private key exposure</h3>
                <p className="text-gray-400">Your assets remain secure with no risk to your main wallet</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto py-20 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold mb-3">Do I need a wallet to mint?</h3>
            <p className="text-gray-300">Not yet — v0 is frontend only. Walletless minting is coming soon.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold mb-3">What happens after I mint?</h3>
            <p className="text-gray-300">Your NFT will execute strategies automatically via AI agents in v1.</p>
          </div>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-xl font-bold mb-3">Is this just a meme?</h3>
            <p className="text-gray-300">It starts as a meme. Then it automates wealth.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto py-20 px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-transparent bg-clip-text">
          Ready to Mint What You Believe?
        </h2>
        <p className="text-xl mb-10 max-w-2xl text-gray-300">No apps. No strategies. Just conviction, minted.</p>
        <Button
          disabled
          className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full px-8 py-6 text-lg font-medium"
        >
          Coming Soon
        </Button>
      </section>

      {/* Footer */}
      <footer className="container mx-auto py-10 px-4 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">Built on Solana. Powered by Metaplex & AgentKit.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
