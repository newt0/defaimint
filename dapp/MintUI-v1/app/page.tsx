import Hero from "@/components/hero"
import VaultGrid from "@/components/vault-grid"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <VaultGrid />
      </div>
    </main>
  )
}
