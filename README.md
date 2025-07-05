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
1. **Admin** logs in via MetaMask and verifies NGOs on the blockchain.
2. **VerifiedNGOs** register their causes with description.
3. **Donors** choose from the causes registered by verified NGOs and donate using MetaMask.
4. **NGOs** withdraw funds only for disaster-related causes.
5. **All actions** (donation, withdrawal, registration) are recorded as events on-chain.



---

## 🖥️ Getting Started

### 📁 Clone the Repository

```bash
git clone https://github.com/Deekshitha-1310/eth-donation-tracker.git
cd eth-donation-tracker





