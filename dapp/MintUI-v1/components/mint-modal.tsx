"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Loader2, CheckCircle, Wallet } from "lucide-react"

export default function MintModal({ isOpen, onClose, vault }) {
  const [step, setStep] = useState("connect") // connect, form, minting, success
  const [amount, setAmount] = useState("100")
  const [belief, setBelief] = useState("")
  const [agreed, setAgreed] = useState(false)

  const handleConnect = () => {
    setStep("form")
  }

  const handleMint = () => {
    setStep("minting")
    // Simulate minting process
    setTimeout(() => {
      setStep("success")
    }, 2000)
  }

  const handleClose = () => {
    // Reset state when closing
    setStep("connect")
    setBelief("")
    setAgreed(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-zinc-900 border-zinc-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            {step === "connect" && "Connect Wallet"}
            {step === "form" && `Mint "${vault?.title}" Belief NFT`}
            {step === "minting" && "Minting in Progress"}
            {step === "success" && "Minting Successful!"}
          </DialogTitle>
        </DialogHeader>

        {step === "connect" && (
          <div className="py-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Wallet className="h-12 w-12 text-purple-500" />
              <p className="text-center text-gray-400">
                Connect your wallet to mint your belief NFT and activate the associated DeFi strategy.
              </p>
              <Button
                onClick={handleConnect}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        )}

        {step === "form" && (
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to Mint</Label>
              <div className="grid grid-cols-3 gap-2">
                <Button
                  type="button"
                  variant={amount === "10" ? "default" : "outline"}
                  className={amount === "10" ? "bg-purple-600" : "bg-zinc-800"}
                  onClick={() => setAmount("10")}
                >
                  10 USDC
                </Button>
                <Button
                  type="button"
                  variant={amount === "100" ? "default" : "outline"}
                  className={amount === "100" ? "bg-purple-600" : "bg-zinc-800"}
                  onClick={() => setAmount("100")}
                >
                  100 USDC
                </Button>
                <Button
                  type="button"
                  variant={amount === "1000" ? "default" : "outline"}
                  className={amount === "1000" ? "bg-purple-600" : "bg-zinc-800"}
                  onClick={() => setAmount("1000")}
                >
                  1000 USDC
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="belief">Your Belief Statement (Optional)</Label>
              <Textarea
                id="belief"
                placeholder="Express your belief in your own words..."
                value={belief}
                onChange={(e) => setBelief(e.target.value)}
                className="bg-zinc-800 border-zinc-700"
              />
              <p className="text-xs text-gray-400">This statement will be permanently stored with your NFT.</p>
            </div>

            <div className="flex items-start space-x-2 pt-2">
              <Checkbox
                id="terms"
                checked={agreed}
                onCheckedChange={(checked) => setAgreed(checked === true)}
                className="data-[state=checked]:bg-purple-600"
              />
              <Label htmlFor="terms" className="text-sm font-normal">
                I understand that minting this NFT will trigger an autonomous DeFi strategy on Solana using the selected
                amount.
              </Label>
            </div>
          </div>
        )}

        {step === "minting" && (
          <div className="py-8 flex flex-col items-center justify-center">
            <Loader2 className="h-12 w-12 text-purple-500 animate-spin mb-4" />
            <p className="text-center text-gray-400">Minting your belief NFT and initializing the DeFi strategy...</p>
          </div>
        )}

        {step === "success" && (
          <div className="py-8 flex flex-col items-center justify-center">
            <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
            <p className="text-center text-gray-400 mb-4">
              Your "{vault?.title}" belief NFT has been successfully minted and the DeFi strategy is now active.
            </p>
            <div className="bg-zinc-800 rounded-md p-4 w-full">
              <p className="text-sm font-medium text-gray-300">Transaction Details:</p>
              <p className="text-xs text-gray-400 truncate">Hash: 0x7f9e8d7c6b5a4c3d2e1f0a9b8c7d6e5f4a3b2c1d0</p>
            </div>
          </div>
        )}

        <DialogFooter>
          {step === "form" && (
            <Button
              onClick={handleMint}
              disabled={!agreed}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
            >
              Confirm & Mint
            </Button>
          )}

          {step === "success" && (
            <Button
              onClick={handleClose}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Close
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
