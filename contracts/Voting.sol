pragma solidity ^0.4.18;

contract Voting {
  // associate each address that votes to a candidate
  mapping (address => bytes32) public votesReceived;
  bytes32[] public candidateList;
  address[] public voterList;
  bytes32 public text;

  /* This is the constructor which will be called once when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of candidates who will be contesting in the election
  */
  function Voting(bytes32[] candidateNames, bytes32 textForVoting) public {
    candidateList = candidateNames;
    text = textForVoting;
  }

  // This function returns the total votes a candidate has received so far
  function totalVotesFor(bytes32 candidate) view public returns (uint8) {
    require(validCandidate(candidate));
    uint8 votes = 0;

    for (uint i = 0; i < voterList.length; i++) {
      if (votesReceived[voterList[i]] == candidate) {
        votes = votes + 1;
      }
    }

    return votes;
  }

  // This function increments the vote count for the specified candidate. This
  // is equivalent to casting a vote
  function voteForCandidate(bytes32 candidate, address user) public {
    require(validCandidate(candidate));
    require(validVoter(user));
    votesReceived[user] = candidate;
    voterList.push(user);
  }

  function validCandidate(bytes32 candidate) view public returns (bool) {
    for (uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i] == candidate) {
        return true;
      }
    }
    return false;
  }

  // SHAME: same logic as validCandidate
  function validVoter(address voter) view public returns (bool) {
    for (uint i = 0; i < voterList.length; i++) {
      if (voterList[i] == voter) {
        return false;
      }
    }
    return true;
  }

  function getNumberCandidates() view public returns (uint) {
    return candidateList.length;
  }
}
