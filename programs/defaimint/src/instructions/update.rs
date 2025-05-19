use anchor_lang::prelude::*;
use crate::{state::BeliefNFT, errors::CustomError};

pub fn handle(ctx: Context<UpdateStrategy>, new_belief_id: u64) -> Result<()> {
    let belief_nft = &mut ctx.accounts.belief_nft;

    // 所有者チェック：他人のNFTを勝手に更新できないようにする
    require_keys_eq!(belief_nft.owner, ctx.accounts.user.key(), CustomError::Unauthorized);

    // belief_id（戦略ID）を更新
    belief_nft.belief_id = new_belief_id;
    Ok(())
}

#[derive(Accounts)]
pub struct UpdateStrategy<'info> {
    #[account(mut, seeds = [b"belief", user.key().as_ref()], bump)]
    pub belief_nft: Account<'info, BeliefNFT>,

    pub user: Signer<'info>,
}
