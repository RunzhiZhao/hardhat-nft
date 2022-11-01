import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";

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
      accounts: {mnemonic: MNEMONIC, initialIndex: 0},
      timeout: 1800000,
    },
  },
  etherscan: {
    apiKey: ETH_API_KEY,
  },
  solidity: {
    version: "0.8.17",
  },
};

export default config;
