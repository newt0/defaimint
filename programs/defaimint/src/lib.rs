use anchor_lang::prelude::*;

declare_id!("DeFA111111111111111111111111111111111111111");

#[program]
pub mod defai_mint {
    use super::*;

    pub fn initialize_strategy(ctx: Context<InitializeStrategy>, belief_id: u64) -> Result<()> {
        let belief_nft = &mut ctx.accounts.belief_nft;
        belief_nft.owner = ctx.accounts.user.key();
        belief_nft.belief_id = belief_id;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeStrategy<'info> {
    #[account(init, payer = user, space = 8 + 32 + 8)]
    pub belief_nft: Account<'info, BeliefNFT>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct BeliefNFT {
    pub owner: Pubkey,
    pub belief_id: u64,
}
