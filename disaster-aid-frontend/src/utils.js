import { ethers } from "ethers";
import ABI from "./abi/DisasterAid.json";

export const CONTRACT_ADDRESS = "0x963d8cef95393e3647091A07727a7D00C6E9Df2c";

export const getContract = async () => {
  if (!window.ethereum) throw new Error("Please install Metamask");

  await window.ethereum.request({ method: "eth_requestAccounts" });
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  return contract;
};
export const detectUserRole = async () => {
  const contract = await getContract();
  const signer = await contract.signer;
  const address = await signer.getAddress();

  const adminAddress = await contract.admin();
  const isNGO = await contract.verifiedNGOs(address);

  if (address.toLowerCase() === adminAddress.toLowerCase()) return "admin";
  else if (isNGO) return "ngo";
  else return "donor";
};
