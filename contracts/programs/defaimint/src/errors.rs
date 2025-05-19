use anchor_lang::prelude::*;

#[error_code]
pub enum CustomError {
    #[msg("You are not the owner of this belief NFT.")]
    Unauthorized,
}
