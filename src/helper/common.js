import { web3 } from "@project-serum/anchor";
import { getAssociatedTokenAddressSync } from "@solana/spl-token";

export async function createProposal(
  hackathonProgram,
  superAdmin,
  walletPublicKey,
  tokenVote,
  title,
  description,
  startTime,
  endTime,
  voteType,
  numOfOptions,
  tokensPerOption,
  threshold,
  maxOptionsPerVote,
  systemProgram,
  tokenProgram,
  time,
  transaction = new web3.Transaction()
) {
  const dao = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("dao"), superAdmin.toBuffer()],
    hackathonProgram.programId
  )[0];

  const proposal = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("proposal"), walletPublicKey.toBuffer(), Buffer.from("0")],
    hackathonProgram.programId
  )[0];

  transaction.add(
    await hackathonProgram.methods
      .createProposal(
        title,
        description,
        startTime,
        endTime,
        voteType,
        numOfOptions,
        tokensPerOption,
        threshold,
        maxOptionsPerVote
      )
      .accounts({
        authority: walletPublicKey,
        dao,
        proposal,
        tokenVote,
        systemProgram,
        tokenProgram,
        time,
      })
      .instruction()
  );

  return transaction;
}

export async function voteTransaction(
  hackathonProgram,
  superAdmin,
  walletPublicKey,
  proposal,
  options,
  tokenVote,
  systemProgram,
  tokenProgram,
  associatedTokenProgram,
  time,
  transaction = new web3.Transaction()
) {
  const dao = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("dao"), superAdmin.toBuffer()],
    hackathonProgram.programId
  )[0];
  const voter = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("voter"), walletPublicKey.toBuffer(), proposal.toBuffer()],
    hackathonProgram.programId
  )[0];
  const authorityTokenAccount = getAssociatedTokenAddressSync(
    tokenVote,
    walletPublicKey
  );
  const proposalTokenAccount = getAssociatedTokenAddressSync(
    tokenVote,
    proposal
  );

  transaction.add(
    await hackathonProgram.methods
      .vote(options.join(","))
      .accounts({
        authority: walletPublicKey,
        superAdmin,
        dao,
        proposal,
        voter,
        tokenVote,
        authorityTokenAccount,
        proposalTokenAccount,
        systemProgram,
        tokenProgram,
        associatedTokenProgram,
        time,
      })
      .instruction()
  );

  return transaction;
}

export async function claimTransaction(
  hackathonProgram,
  superAdmin,
  walletPublicKey,
  proposal,
  tokenVote,
  systemProgram,
  tokenProgram,
  associatedTokenProgram,
  time,
  transaction = new web3.Transaction()
) {
  const dao = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("dao"), superAdmin.toBuffer()],
    hackathonProgram.programId
  )[0];
  const voter = web3.PublicKey.findProgramAddressSync(
    [Buffer.from("voter"), walletPublicKey.toBuffer(), proposal.toBuffer()],
    hackathonProgram.programId
  )[0];
  const authorityTokenAccount = getAssociatedTokenAddressSync(
    tokenVote,
    walletPublicKey
  );
  const proposalTokenAccount = getAssociatedTokenAddressSync(
    tokenVote,
    proposal
  );

  transaction.add(
    await hackathonProgram.methods
      .claim()
      .accounts({
        authority: walletPublicKey,
        superAdmin,
        dao,
        proposal,
        voter,
        tokenVote,
        authorityTokenAccount,
        proposalTokenAccount,
        systemProgram,
        tokenProgram,
        associatedTokenProgram,
        time,
      })
      .instruction()
  );

  return transaction;
}

export async function sendAndConfirmTransaction(
  connection,
  signers,
  transactions,
  transaction = new web3.Transaction()
) {
  transaction.add(...transactions);
  return web3.sendAndConfirmTransaction(connection, transaction, signers);
}
