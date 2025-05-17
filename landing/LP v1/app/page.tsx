import { ArrowDown, ArrowRight, Brain, Coins, Wallet, BarChart3, Github } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">DeFAI Mint</div>
        <div className="flex gap-6">
          <Link href="#problem" className="hover:text-gray-600 transition-colors">
            Problem
          </Link>
          <Link href="#solution" className="hover:text-gray-600 transition-colors">
            Solution
          </Link>
          <Link href="#how-it-works" className="hover:text-gray-600 transition-colors">
            How It Works
          </Link>
          <Link href="#features" className="hover:text-gray-600 transition-colors">
            Features
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-7xl font-bold mb-6">DeFAI Mint</h1>
        <p className="text-3xl text-gray-700 mb-12 max-w-3xl mx-auto">Mint an NFT. Let it invest. Live your life.</p>
        <Link
          href="#mint"
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-2xl text-xl font-medium shadow-lg hover:bg-gray-800 transition-colors"
        >
          Start Minting <ArrowDown size={20} />
        </Link>
      </section>

      {/* Problem Section */}
      <section id="problem" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center">Crypto is broken for most people.</h2>
          <div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg">
            <ul className="space-y-6 text-xl">
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-full mt-1">
                  <ArrowRight size={20} />
                </div>
                <p>140,000+ tokens launch daily</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-full mt-1">
                  <ArrowRight size={20} />
                </div>
                <p>Only experts benefit from AI</p>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-gray-100 p-2 rounded-full mt-1">
                  <ArrowRight size={20} />
                </div>
                <p>DeFi is too complex for newcomers</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-8 text-center">Mint. Believe. Let AI invest.</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto text-center mb-16">
            Introducing DeFAI Mint — an NFT that acts as an autonomous agent, making investment decisions based on your
            beliefs while you focus on what matters most to you.
          </p>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet size={40} />
                </div>
                <p className="font-medium">User</p>
              </div>

              <ArrowRight className="rotate-90 md:rotate-0" size={32} />

              <div className="text-center">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coins size={40} />
                </div>
                <p className="font-medium">Mint</p>
              </div>

              <ArrowRight className="rotate-90 md:rotate-0" size={32} />

              <div className="text-center">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain size={40} />
                </div>
                <p className="font-medium">NFT Agent</p>
              </div>

              <ArrowRight className="rotate-90 md:rotate-0" size={32} />

              <div className="text-center">
                <div className="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 size={40} />
                </div>
                <p className="font-medium">Investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Choose your belief</h3>
              <p className="text-gray-700">Select what you believe in (e.g. Trump, Solana, ETH Exit)</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Coins size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Mint your NFT</h3>
              <p className="text-gray-700">Create your autonomous agent as an NFT</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Let your agent invest</h3>
              <p className="text-gray-700">Your agent invests across chains based on your beliefs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center">Why DeFAI Mint?</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full mt-1">
                  <Wallet size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">No wallet required to mint</h3>
                  <p className="text-gray-700">Get started without the complexity of setting up a crypto wallet</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full mt-1">
                  <Coins size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">NFT holds its own wallet</h3>
                  <p className="text-gray-700">Your NFT agent manages its own funds and investments</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full mt-1">
                  <Brain size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Autonomous AI trading</h3>
                  <p className="text-gray-700">Advanced AI algorithms make investment decisions for you</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-gray-100 p-3 rounded-full mt-1">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Your belief defines your strategy</h3>
                  <p className="text-gray-700">Investment strategies aligned with your personal beliefs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="mint" className="bg-gray-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12">Ready to let go?</h2>
          <button className="bg-white text-black px-10 py-5 rounded-2xl text-xl font-medium shadow-lg hover:bg-gray-100 transition-colors">
            Mint Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-4">Built on Solana, powered by Metaplex & AgentKit.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
