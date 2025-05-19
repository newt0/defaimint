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

    pub fn update_strategy(ctx: Context<UpdateStrategy>, new_belief_id: u64) -> Result<()> {
        let belief_nft = &mut ctx.accounts.belief_nft;
        require_keys_eq!(belief_nft.owner, ctx.accounts.user.key(), CustomError::Unauthorized);
        belief_nft.belief_id = new_belief_id;
        Ok(())
    }

    pub fn close_strategy(ctx: Context<CloseStrategy>) -> Result<()> {
        let belief_nft = &mut ctx.accounts.belief_nft;
        require_keys_eq!(belief_nft.owner, ctx.accounts.user.key(), CustomError::Unauthorized);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct InitializeStrategy<'info> {
    #[account(init, payer = user, space = 8 + 32 + 8, seeds = [b"belief", user.key().as_ref()], bump)]
    pub belief_nft: Account<'info, BeliefNFT>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct UpdateStrategy<'info> {
    #[account(mut, seeds = [b"belief", user.key().as_ref()], bump)]
    pub belief_nft: Account<'info, BeliefNFT>,
    pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct CloseStrategy<'info> {
    #[account(mut, close = user, seeds = [b"belief", user.key().as_ref()], bump)]
    pub belief_nft: Account<'info, BeliefNFT>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[account]
pub struct BeliefNFT {
    pub owner: Pubkey,
    pub belief_id: u64,
}

#[error_code]
pub enum CustomError {
    #[msg("You are not the owner of this belief NFT.")]
    Unauthorized,
}
