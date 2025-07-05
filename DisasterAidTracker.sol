// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/// @title Disaster Aid Tracker
/// @notice This contract allows people to donate funds transparently for specific disasters and track how donations are used.
contract DisasterAidTracker {
    address public owner;

    enum RegionType { Flood, Earthquake, Cyclone, Pandemic }
    uint public receiptCounter = 1;

    struct Donation {
        address donor;
        uint amount;
        string message;
        RegionType disasterType;
        uint receiptId;
        bool spent;
    }

    mapping(uint => Donation) public donations;
    mapping(address => uint[]) public donorHistory;

    event NewDonation(address indexed donor, uint amount, RegionType disasterType, string message, uint receiptId);

    constructor() {
        owner = msg.sender;
    }

    /// @notice Accept donations and log them with a unique receipt ID
    function donate(RegionType disasterType, string memory message) external payable {
        require(msg.value > 0, "Donation must be greater than 0");

        donations[receiptCounter] = Donation(msg.sender, msg.value, message, disasterType, receiptCounter, false);
        donorHistory[msg.sender].push(receiptCounter);

        emit NewDonation(msg.sender, msg.value, disasterType, message, receiptCounter);
        receiptCounter++;
    }

    /// @notice Only owner (admin) can mark a donation as used
    function markAsSpent(uint receiptId) external {
        require(msg.sender == owner, "Only admin can update status");
        require(!donations[receiptId].spent, "Already marked spent");

        donations[receiptId].spent = true;
    }

    /// @notice Anyone can check their donation history
    function getMyDonations() external view returns (uint[] memory) {
        return donorHistory[msg.sender];
    }
}
