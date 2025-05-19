use anchor_lang::prelude::*;
use crate::{state::BeliefNFT, errors::CustomError};

pub fn handle(ctx: Context<CloseStrategy>) -> Result<()> {
    let belief_nft = &ctx.accounts.belief_nft;
    require_keys_eq!(belief_nft.owner, ctx.accounts.user.key(), CustomError::Unauthorized);
    Ok(())
}

#[derive(Accounts)]
pub struct CloseStrategy<'info> {
    #[account(
        mut,
        close = user,
        seeds = [b"belief", user.key().as_ref()],
        bump
    )]
    pub belief_nft: Account<'info, BeliefNFT>,

    #[account(mut)]
    pub user: Signer<'info>,
}
