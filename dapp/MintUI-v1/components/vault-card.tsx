"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingUp } from "lucide-react"

export default function VaultCard({ vault, onMintClick }) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden hover:border-purple-500 transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{vault.title}</h3>
          <div className="flex gap-1">
            {vault.strategies.map((strategy, index) => (
              <Badge key={index} variant="outline" className="bg-zinc-800 text-xs">
                {strategy}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center mb-4">
          <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden bg-gradient-to-br from-purple-900 to-pink-700 p-1">
            <div className="absolute inset-0 rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
              {vault.strategies.includes("Meme Sniper") && <Zap className="w-10 h-10 text-yellow-500" />}
              {vault.strategies.includes("SOL/BTC DCA") && <TrendingUp className="w-10 h-10 text-blue-500" />}
              {vault.strategies.includes("Green Tech") && <span className="text-green-500 text-3xl">♻️</span>}
              {vault.strategies.includes("DeFi Yield") && <span className="text-purple-500 text-3xl">🏛️</span>}
            </div>
          </div>
          <p className="text-gray-400 text-sm">{vault.description}</p>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Mint options:</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700">
              10 USDC
            </Button>
            <Button variant="outline" className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700">
              100 USDC
            </Button>
            <Button variant="outline" className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700">
              1000 USDC
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onMintClick}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Mint
        </Button>
      </CardFooter>
    </Card>
  )
}
