# 🌐 Disaster Aid Tracker

**Built by Team Nexachain**

_Disaster Aid Tracker_ is a decentralized Web3 donation platform that ensures trust, transparency, and accountability in disaster relief contributions. Powered by Ethereum smart contracts, it enables donors to contribute to verified NGOs with complete visibility on how funds are used.

---

## 💡 Problem Statement

In times of disaster, donations often fall short due to public mistrust in fraudulent NGOs and lack of transparency in fund usage. Many donors hesitate because they don’t know where their money goes.

### ✅ Our Solution

- **NGO Verification**: Only NGOs verified by an admin can join the platform and receive donations.
- **Blockchain Transparency**: All donation and spending activity is publicly recorded on-chain.
- **Donor Trust**: Donors can see how much was donated, to whom, and how much has been used.

---

## 🚀 Key Features

### 🛡️ Verified NGO Onboarding  
Admins manually verify NGOs before they can participate — no unverified parties allowed.

### 🔍 Transparent Donation Records  
Every donation and withdrawal is logged via smart contract events and visible on-chain.

### 🔗 Direct On-Chain Interactions  
Donors interact directly with the smart contract — no intermediaries or centralized databases.

---

## 🧰 Technologies Used

| Technology                     | Purpose                                                                    |
| ------------------------------ | -------------------------------------------------------------------------- |
| **Solidity**                   | Programming language used to write the `DisasterAid.sol` smart contract    |
| **Ethereum** (Sepolia Testnet) | Blockchain network where the smart contract is deployed                    |
| **MetaMask**                   | Crypto wallet used by admin, NGOs, and donors to interact with the dApp    |
| **Remix IDE**                  | Online IDE used to write, compile, and deploy the smart contract           |
| **Ethers.js**                  | JavaScript library used in frontend to read/write data from the blockchain |
| **Events** (in Solidity)       | Used to log actions like donations, withdrawals, and cause registrations   |

---

## 🧱 Architecture / Workflow

The Disaster Aid Tracker is built around a transparent and permissioned flow of actions:

1. **Admin Verification**
   - Admin logs in via MetaMask.
   - Admin reviews NGO applications and verifies them on the Ethereum Sepolia testnet via the smart contract.
   - Only verified NGOs can interact with donation logic.

2. **NGO Cause Registration**
   - Verified NGOs can register one or more disaster-related causes.
   - Each cause includes a title, description, and requested funding amount.
   - Causes are stored on-chain using Solidity mappings or structs.

3. **Donor Interaction**
   - Any user with MetaMask connected to Sepolia can view verified causes.
   - Donors contribute ETH directly to the cause via the smart contract.
   - Each donation is recorded as an **event** with donor address, amount, and timestamp.

4. **Funds Withdrawal**
   - NGOs can withdraw funds **only** if:
     - They are verified.
     - The funds are linked to their cause.
     - The purpose is for a disaster-related reason (enforced by app policy).
   - Withdrawals emit events to maintain transparency.

5. **On-Chain Logging**
   - All critical actions (verification, donations, registrations, withdrawals) emit Solidity events.
   - This ensures full transparency, auditability, and immutability on the Ethereum blockchain.


[ Donor ] → [ MetaMask ] → [ Smart Contract ] ← [ MetaMask ] ← [ Verified NGO ]
                                             ↑
                                            [ Admin (verifies NGOs) ]

🧠 AI TOOLS USED:
ChatGPT (OpenAI)
Used for:

Generating smart contract structure

Help with frontend integration using Ethers.js

Writing README.md and project documentation

Debugging Git and deployment issues

🎥 Demo Video:
https://youtu.be/GxbBypQeWrY

## 🖥️ Getting Started

### 📁 Clone the Repository

```bash
git clone https://github.com/Deekshitha-1310/eth-donation-tracker.git
cd eth-donation-tracker





