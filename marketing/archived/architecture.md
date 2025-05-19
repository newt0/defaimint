# DeFAI Mint - 技術アーキテクチャ概要（v0.1）

## 1. 高レベル全体像（コンポーネント間の流れ）

- ユーザー → フロントエンド（Next.js + wagmi） → ミント処理
- NFT ミント（Metaplex） → Asset Signer → Execute
- AI（Agent Kit） → DeFi 戦略発動（Solana 上 Vault）

## 2. フロントエンド構成

- Mint UI：選択肢（戦略選択 A/B）、Wallet 接続、Mint ボタン
- ライブラリ：Next.js（App Router）、wagmi、Tailwind

## 3. バックエンド / スマートコントラクト構成

- NFT ミント：Metaplex Token Metadata Core + Compressed NFT（予定）
- Asset Signer：ユーザー NFT に紐づく AI Execution 権限
- Execute：選択戦略に基づいたトレード実行
- Vault：Solana 上の SPL トークン Vault（USDC or WSOL）

## 4. ストレージ / データ構成

- Vault 戦略定義：Arweave or Walrus にメタデータ記録
- トランザクション履歴：Solana チェーン上
- NFT メタデータ：思想・戦略情報なども含める（オプション）

## 5. AI & オートメーション

- Agent Kit v2 によるイベントトリガー（例：トランプ投稿）
- 事前定義された実行テンプレートを用いてオンチェーン処理

## 6. セキュリティ・実行制御

- Asset Signer の権限設計：NFT 保有者に限定
- Execute の戦略分岐：A/B 選択に基づく branch 制御
- MPC 統合：Turnkey 等による将来的な拡張性検討

## 7. 今後の拡張

- ダッシュボード UI
- 成績ランキング / ソーシャル要素
- 他チェーン拡張（Ethereum via Wormhole など）
