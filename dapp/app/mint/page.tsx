"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import Image from "next/image"

export default function MintPage() {
  const [mintingState, setMintingState] = useState<"ready" | "minting" | "success">("ready")
  const [progress, setProgress] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  const handleMintClick = () => {
    setMintingState("minting")
    setProgress(0)

    // Simulate progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 5
      })
    }, 150)

    // Simulate completion after 3 seconds
    setTimeout(() => {
      clearInterval(interval)
      setProgress(100)
      setMintingState("success")

      // Simulate agent logs appearing
      const logMessages = [
        "[10:42:01] Monitoring: @realDonaldTrump",
        '[10:42:04] Signal detected: Trump mentions "crypto"',
        "[10:42:05] Sniping: TRUMPCOIN @ $0.000012",
        "[10:42:07] Tx confirmed: 0x123...789",
      ]

      logMessages.forEach((message, index) => {
        setTimeout(
          () => {
            setLogs((prev) => [...prev, message])
          },
          1000 + index * 800,
        )
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12">
      {/* Wallet Connection Status */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-full px-6 py-2 mb-12 backdrop-blur-sm">
        <span className="text-sm font-medium text-gray-300">Connected: 0x1234...ABCD</span>
      </div>

      {/* NFT Image */}
      <div className="mb-8 mt-4">
        <div className="relative w-[400px] max-w-full mx-auto rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-gray-800 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.1)]">
          <Image
            src="/images/trump-confidentor.png"
            alt="TRUMP_CONFIDENTOR NFT"
            width={400}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Strategy Card */}
      <div className="w-full max-w-xl bg-gray-900/30 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:border-gray-700">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold mb-4">TRUMP_CONFIDENTOR</h1>

          <div className="mb-4">
            <span className="text-gray-400 text-sm font-medium block mb-1">STRATEGY</span>
            <p className="text-gray-200">Monitor Trump's X posts in real time — Snipe related meme tokens using AI.</p>
          </div>

          <div className="mb-8">
            <span className="text-gray-400 text-sm font-medium block mb-1">IDEOLOGY</span>
            <p className="text-gray-200 italic">"Trump embodies crypto freedom. Those who believe, profit."</p>
          </div>

          {mintingState === "ready" && (
            <Button
              onClick={handleMintClick}
              className="w-full py-6 bg-white text-black hover:bg-gray-200 transition-all duration-300 rounded-xl text-lg font-medium shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            >
              Mint Now
            </Button>
          )}

          {mintingState === "minting" && (
            <div className="space-y-3">
              <Progress value={progress} className="h-2 bg-gray-800" />
              <p className="text-gray-300">Minting...</p>
            </div>
          )}

          {mintingState === "success" && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-center space-x-2 text-green-400">
                <div className="w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <span className="font-medium">Mint Successful!</span>
              </div>
              <p className="text-gray-300">Your AI agent has been activated.</p>
              <p className="text-gray-400 text-sm">Tx: 0xABCD...1234</p>
            </div>
          )}
        </div>
      </div>

      {/* Agent Log */}
      {mintingState === "success" && logs.length > 0 && (
        <div className="w-full max-w-xl mt-8 bg-gray-900/30 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm animate-fadeIn">
          <h2 className="text-xl font-medium mb-4">[Agent Log]</h2>
          <div className="font-mono text-sm space-y-2 bg-black/50 p-4 rounded-lg border border-gray-800">
            {logs.map((log, index) => (
              <div key={index} className="text-gray-300 animate-slideIn" style={{ animationDelay: `${index * 0.2}s` }}>
                <span className="text-gray-500">&gt; </span>
                {log}
              </div>
            ))}
            {logs.length === 4 && <div className="h-4 w-2 bg-white/70 inline-block ml-1 animate-blink"></div>}
          </div>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-12">
        <Link href="/">
          <Button
            variant="outline"
            className="flex items-center space-x-2 border-gray-800 text-gray-300 hover:bg-gray-800/50 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Strategy List</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
