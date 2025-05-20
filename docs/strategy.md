# DeFAI NFT Strategy Overview

This document outlines a curated set of DeFAI NFTs and their associated ideologies, strategies, and execution notes.  
Each NFT represents an autonomous investment agent driven by a specific belief.

---

## 1. 🟢 `SOL_MAXIMIZER`

- **Strategy**: Stake SOL via Kamino → Convert to LST (e.g., bSOL) → Reinvest into DeFi yield protocols. Continuously monitor APY and reallocate.
- **Ideology**: _"Solana is the future. Maximizing SOL is the righteous path."_
- **Notes**: Auto-transfer to CEX or hardware wallet upon reaching predefined thresholds.

---

## 2. 🟠 `BTC_HODLER`

- **Strategy**: Accumulate wBTC via periodic purchases → Lend for yield. A low-risk, long-term Bitcoin accumulation strategy.
- **Ideology**: _"In Bitcoin we trust."_ A conservative crypto worldview that places BTC at the core.
- **Notes**: Same transfer option as above.

---

## 3. 🔵 `STABLE_OPTIMIZER`

- **Strategy**: Monitor and reallocate USDC/USDT across Kamino, Solend, and MarginFi to optimize yield.
- **Ideology**: _"Stablecoins are the intelligent choice. Grow capital without price volatility."_
- **Notes**: Same transfer option as above.

---

## 4. 🔴 `TRUMP_CONFIDENTOR`

- **Strategy**: Monitor Trump's posts on X (formerly Twitter) → Snipe related meme tokens.
- **Ideology**: _"Trump embodies crypto freedom. Those who believe, profit."_
- **Notes**: Requires AI agent with real-time social signal processing.

---

## 5. 🟣 `SOLANA_BLUECHIPER`

- **Strategy**: Automatically monitor floor prices of major Solana NFTs (e.g., MadLads, Tensorians) → Snipe entries.
- **Ideology**: _"Solana NFTs are singular. All-in on their future."_
- **Notes**: Auto-transfer supported. Risk limits can be configured.

---

## 6. 🐳 `SMB_WHALE`

- **Strategy**: Focused floor sniping strategy on SMB NFTs, especially during low-liquidity hours.
- **Ideology**: _"Loyalty to OG NFTs. Belief in Solana NFT culture."_
- **Notes**: Can be integrated with the SMB Marketplace for enhanced effect.

---

## 7. 🌐 `JUP_SNIPER`

- **Strategy**: Snipe trending or newly listed tokens on Jupiter. Configurable for specific token pairs.
- **Ideology**: _"Believe in Jupiter’s network effects and its surrounding ecosystem."_
- **Notes**: Requires Jupiter API and market trend integration.

---

## 🧠 Optional Suggestions

- The `ideology` field can be surfaced as **UI tags** (e.g., `#SolanaMaxi`, `#BitcoinConservative`) for enhanced UX and discovery.
- The **transfer behavior** can be stored as an on-chain passive setting, configurable per NFT (though may require custody security measures).
- Across all strategies, consider exposing metadata such as:
  - **Risk Tolerance**: low / moderate / high
  - **Duration Preference**: short / mid / long-term
  - **Autonomy Level**: fully automated / semi-automated / manual-confirmation

---

For implementation details and metadata schema, refer to:
[📁 `/metadata`](../metadata)
