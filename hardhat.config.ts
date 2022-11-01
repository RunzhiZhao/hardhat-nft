import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import "@openzeppelin/hardhat-upgrades";

dotenv.config()
const { NETWORK_RPC, NETWORK_ID, MNEMONIC, ETH_API_KEY } = process.env;

const config: HardhatUserConfig = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    public: {
      url: NETWORK_RPC,
      chainId: Number(NETWORK_ID),
      accounts: {
        mnemonic: MNEMONIC,
        initialIndex: 0,
      },
    },
  },
  etherscan: {
    apiKey: ETH_API_KEY,
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
};

export default config;
