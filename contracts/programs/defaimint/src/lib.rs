pub mod instructions;
pub mod state;
pub mod errors;
pub mod utils;

use anchor_lang::prelude::*;
use instructions::*;

declare_id!("DeFA111111111111111111111111111111111111111");

#[program]
pub mod defai_mint {
    use super::*;

    pub fn initialize_strategy(ctx: Context<InitializeStrategy>, belief_id: u64) -> Result<()> {
        initialize::handle(ctx, belief_id)
    }

    pub fn update_strategy(ctx: Context<UpdateStrategy>, new_belief_id: u64) -> Result<()> {
        update::handle(ctx, new_belief_id)
    }

    pub fn close_strategy(ctx: Context<CloseStrategy>) -> Result<()> {
        close::handle(ctx)
    }

    pub fn mint_belief_nft(
        ctx: Context<MintBeliefNFT>,
        belief_id: u64,
        uri: String,
        name: String,
        symbol: String,
    ) -> Result<()> {
        mint_nft::handle(ctx, belief_id, uri, name, symbol)
    }
}
