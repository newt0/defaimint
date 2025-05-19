#[error_code]
pub enum CustomError {
    #[msg("You are not the owner of this belief NFT.")]
    Unauthorized,

    #[msg("Invalid belief ID.")]
    InvalidBeliefId,

    #[msg("Strategy already exists.")]
    StrategyAlreadyInitialized,

    #[msg("Metadata creation failed.")]
    MetadataCpiFailed,
}
