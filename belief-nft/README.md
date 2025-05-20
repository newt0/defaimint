# DeFAI Mint – On-Chain Ideology and Automated Financial Agents

_DeFAI Mint is a new financial primitive that lets you mint an **ideology-powered AI agent** as an NFT. Each NFT represents not only a belief, but also an autonomous investment strategy._

> **"Trade what you believe."**

---

## 🔥 What is DeFAI NFT?

Each DeFAI NFT is a **programmable financial agent** on Solana, encoded with:

- A personal **belief or ideology** (e.g. Solana maximalism, BTC conservatism)
- A corresponding **investment strategy** (e.g. staking, sniping, yield optimization)
- An embedded **AI agent prompt** that governs its actions
- On-chain **autonomy settings** and **execution triggers**

Upon minting, the NFT activates a self-executing strategy aligned with the holder’s ideological position.

---

## 🧠 Philosophy

In DeFAI Mint, **strategy = belief**.

This system explores a future where market positions are not only defined by rational expectations, but also by deeply held convictions – turning finance into a form of ideological expression.

We believe:

- Solana ≠ just an L1 → it's a movement
- Staking ≠ just yield → it's alignment
- Sniping ≠ just trading → it's conviction

---

## 🧾 Metadata Architecture

We separate metadata into two layers using [Walrus](https://github.com/synonymdev/walrus):

### 1. **Immutable Layer (stored via Walrus Immutable)**

Defines the **core identity** of the NFT at the time of mint. Cannot be altered.

| Field                | Description                                     |
| -------------------- | ----------------------------------------------- |
| `name`               | NFT name (e.g. SOL_MAXIMIZER)                   |
| `symbol`             | Token symbol                                    |
| `description`        | Brief summary                                   |
| `ideology`           | Belief statement (e.g. "Solana is the future.") |
| `initialStrategy`    | Canonical investment strategy                   |
| `riskProfile`        | `low`, `moderate`, `high`                       |
| `durationPreference` | `short_term`, `mid_term`, `long_term`           |
| `image`              | NFT visual                                      |
| `creator`            | Creator address or DID                          |
| `tags`               | Keyword tags                                    |
| `version`            | Metadata schema version                         |
| `external_url`       | Optional UI link                                |

📁 Example:
`metadata/immutable/sol_maximizer.json`

---

### 2. **Editable Layer (stored via Walrus Mutable)**

Defines the **runtime configuration** of the AI agent. Can be updated during operation.

| Field                 | Description                                                    |
| --------------------- | -------------------------------------------------------------- |
| `prompt`              | Base AI prompt for decision making                             |
| `triggerType`         | Execution logic (`daily_cron`, `price_event`, `social_signal`) |
| `modelVersion`        | AI model (e.g. GPT-4o)                                         |
| `autonomyLevel`       | `auto`, `semi_auto`, `manual_confirm`                          |
| `initialDeposit`      | Amount deposited to agent wallet                               |
| `walletControl`       | `agent_wallet` or `user_delegate`                              |
| `exitCondition`       | Exit strategy (e.g. `target_value >= 200 SOL`)                 |
| `transferDestination` | Where to send funds post-exit                                  |

📁 Example:
`metadata/editable/sol_maximizer.json`

---

## 🔍 Examples

### 🟢 `SOL_MAXIMIZER`

- **Ideology**: Solana is the most performant L1 and should be accumulated
- **Strategy**: Stake → LST → Kamino yield farm
- **Trigger**: Daily cron
- **Autonomy**: Fully automated

### 🟠 `BTC_HODLER`

- **Ideology**: Bitcoin is the safest long-term store of value
- **Strategy**: Accumulate wBTC and lend for passive yield
- **Autonomy**: Semi-auto with user confirmations

### 🔵 `STABLE_OPTIMIZER`

- **Ideology**: Capital preservation is intelligence
- **Strategy**: USDC/USDT rotated into best APY protocols
- **Trigger**: APY deviation event

---

## 📦 Repository Structure

```
belierf-nft-metadata/
├── metadata/
│ ├── immutable/
│ │ └── sol_maximizer.json
│ ├── editable/
│ │ └── sol_maximizer.json
│ └── metadata.schema.ts
├── README.md
└── LICENSE
```

---

## 💡 Use Cases

- Verifiable belief-aligned investing
- Ideological portfolio indexing (e.g. #SolanaMaxi, #BTCConservative)
- Autonomous vault NFTs
- Walletless retail UX via AI x Execution

---

## 🌐 Project Link

> [https://defaimint.xyz](https://defaimint.xyz) ← Coming soon

---

## 📜 License

MIT – Fork, extend, and deploy your own belief agents.

---

## 🤝 Credits

Developed as part of the [Colosseum Breakout Hackathon](https://colosseum.org/) on Solana.  
Powered by [Metaplex Execute](https://metaplex.com), [Solana Agent Kit](https://github.com/solana-labs/solana-agent-kit), and [Walrus](https://github.com/synonymdev/walrus).
