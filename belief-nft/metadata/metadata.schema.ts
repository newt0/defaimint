// ─────────────────────────────────────────────
// 型定義
// ─────────────────────────────────────────────

export type AutonomyLevel = "auto" | "semi_auto" | "manual_confirm";
export type TriggerType = "daily_cron" | "price_event" | "social_signal";
export type RiskProfile = "low" | "moderate" | "high";
export type DurationPreference = "short_term" | "mid_term" | "long_term";
export type WalletControl = "agent_wallet" | "user_delegate";

// ─────────────────────────────────────────────
// 永続メタデータ（変更不可）
// ─────────────────────────────────────────────

export interface ImmutableMetadata {
  name: string; // NFT名
  symbol: string; // トークンシンボル
  description: string; // 簡易説明
  ideology: string; // 信念・思想
  initialStrategy: string; // 初期投資戦略（要約）
  riskProfile: RiskProfile; // リスク許容度
  durationPreference: DurationPreference; // 投資期間の傾向
  image: string; // 表示画像URL
  creator: string; // 作成者（ウォレット or DID）
  tags: string[]; // 検索用タグ
  version: string; // メタデータバージョン
  external_url?: string; // LPやダッシュボードへのリンク（任意）
}

// ─────────────────────────────────────────────
// 編集可能メタデータ（運用中に更新可能）
// ─────────────────────────────────────────────

export interface EditableMetadata {
  prompt: string; // AIに渡す投資判断プロンプト
  triggerType: TriggerType; // 実行タイミングのトリガー種別
  modelVersion: string; // 使用するAIモデル
  autonomyLevel: AutonomyLevel; // 自律実行のレベル
  initialDeposit: string; // 初期入金額（例: "100 SOL"）
  walletControl: WalletControl; // 資金運用の主体（NFT内部 or ユーザー委譲）
  exitCondition: string; // Exitの条件（例: ">= 200 SOL"）
  transferDestination: string; // Exit後の送金先
  strategyDetail?: string; // 補足的な運用指示（任意）
}
