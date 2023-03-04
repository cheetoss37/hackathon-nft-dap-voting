import { web3, Program, utils, AnchorProvider } from "@project-serum/anchor";
import ContractJsonIdl from "../idl/hackathon.json";
import { Connection } from "@solana/web3.js";

export const systemProgram = web3.SystemProgram.programId;
export const tokenProgram = utils.token.TOKEN_PROGRAM_ID;
export const associatedTokenProgram = utils.token.ASSOCIATED_PROGRAM_ID;
export const rent = web3.SYSVAR_RENT_PUBKEY;
export const time = web3.SYSVAR_CLOCK_PUBKEY;
export const instruction = web3.SYSVAR_INSTRUCTIONS_PUBKEY;

export const createAnchorProvider = (connection, wallet) =>
  new AnchorProvider(connection, wallet ?? "", {
    preflightCommitment: "confirmed",
  });

export const createConnection = () => {
  const connection = new Connection("https://api.devnet.solana.com", {
    commitment: "confirmed",
    confirmTransactionInitialTimeout: 5 * 60 * 1000,
  });

  return connection;
};

export const hackathonProgram = () => {
  if (!window?.solana) return {};
  const CONNECTION = createConnection();

  const provider = createAnchorProvider(CONNECTION);

  return new Program(
    ContractJsonIdl,
    new web3.PublicKey(ContractJsonIdl.metadata.address),
    provider
  );
};

export const superAdmin = new web3.PublicKey(
  "57p59zh19AWLXFnyFHcQAQnKtHWhuU9CRRmq1QC2WzUi"
);

export const tokenVote = new web3.PublicKey(
  "4LbqZVewzmXD1oAicj8BuwW8hrTsZf135bZAzpxXpfUA"
);
