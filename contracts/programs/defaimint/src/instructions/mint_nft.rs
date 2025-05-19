use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, MintTo, Token, TokenAccount};
use mpl_token_metadata::instruction as mpl_instruction;
use solana_program::program::invoke;

pub fn handle(
    ctx: Context<MintBeliefNFT>,
    _belief_id: u64,
    uri: String,
    name: String,
    symbol: String,
) -> Result<()> {
    // 1. Mint 1 token to user's associated token account
    let cpi_accounts = MintTo {
        mint: ctx.accounts.mint.to_account_info(),
        to: ctx.accounts.user_ata.to_account_info(),
        authority: ctx.accounts.user.to_account_info(),
    };
    let cpi_ctx = CpiContext::new(ctx.accounts.token_program.to_account_info(), cpi_accounts);
    token::mint_to(cpi_ctx, 1)?;

    // 2. Create Metadata Account (Metaplex Token Metadata CPI)
    let metadata_ix = mpl_instruction::create_metadata_accounts_v3(
        ctx.accounts.token_metadata_program.key(),
        ctx.accounts.metadata.key(),
        ctx.accounts.mint.key(),
        ctx.accounts.user.key(),
        ctx.accounts.user.key(),
        ctx.accounts.user.key(),
        name,
        symbol,
        uri,
        None,   // creators
        1,      // seller_fee_basis_points
        true,   // update_authority_is_signer
        true,   // is_mutable
        None,   // collection
        None,   // uses
        None,   // token_standard
    );

    invoke(
        &metadata_ix,
        &[
            ctx.accounts.metadata.to_account_info(),
            ctx.accounts.mint.to_account_info(),
            ctx.accounts.user.to_account_info(),
            ctx.accounts.system_program.to_account_info(),
            ctx.accounts.rent.to_account_info(),
            ctx.accounts.token_metadata_program.to_account_info(),
        ],
    )?;

    Ok(())
}

#[derive(Accounts)]
#[instruction()]
pub struct MintBeliefNFT<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(
        init,
        payer = user,
        mint::decimals = 0,
        mint::authority = user,
        mint::freeze_authority = user
    )]
    pub mint: Account<'info, Mint>,

    #[account(
        init_if_needed,
        payer = user,
        associated_token::mint = mint,
        associated_token::authority = user
    )]
    pub user_ata: Account<'info, TokenAccount>,

    /// CHECK: PDA for token metadata
    #[account(mut)]
    pub metadata: UncheckedAccount<'info>,

    pub token_program: Program<'info, Token>,

    /// CHECK: Metaplex Token Metadata Program
    pub token_metadata_program: UncheckedAccount<'info>,

    pub rent: Sysvar<'info, Rent>,
    pub system_program: Program<'info, System>,
    pub associated_token_program: Program<'info, anchor_spl::associated_token::AssociatedToken>,
}
