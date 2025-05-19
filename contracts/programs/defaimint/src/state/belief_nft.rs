use anchor_lang::prelude::*;

#[account]
pub struct BeliefNFT {
    pub owner: Pubkey,
    pub belief_id: u64,
}
