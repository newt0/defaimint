use anchor_lang::prelude::*;
use crate::state::BeliefNFT;

pub fn handle(ctx: Context<InitializeStrategy>, belief_id: u64) -> Result<()> {
    let belief_nft = &mut ctx.accounts.belief_nft;
    belief_nft.owner = ctx.accounts.user.key();
    belief_nft.belief_id = belief_id;
    Ok(())
}

#[derive(Accounts)]
#[instruction()]
pub struct InitializeStrategy<'info> {
    #[account(
        init,
        payer = user,
        space = 8 + 32 + 8,
        seeds = [b"belief", user.key().as_ref()],
        bump
    )]
    pub belief_nft: Account<'info, BeliefNFT>,

    #[account(mut)]
    pub user: Signer<'info>,

    pub system_program: Program<'info, System>,
}
