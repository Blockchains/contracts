pragma solidity ^0.4.24;


/**
 * @title MerkleProof
 * @dev Merkle proof verification based on
 * https://github.com/ameensol/merkle-tree-solidity/blob/master/src/MerkleProof.sol
 */
library MerkleProof {
  /**
   * @dev Verifies a Merkle proof proving the existence of a leaf in a Merkle tree. Assumes that each pair of leaves
   * and each pair of pre-images are sorted.
   * @param _proof Merkle proof containing sibling hashes on the branch from the leaf to the root of the Merkle tree
   * @param _root Merkle root
   * @param _leaf Leaf of Merkle tree
   */
  function verifyProof(
    bytes32[] _proof,
    bytes32 _root,
    bytes32 _leaf
  )
    internal
    pure
    returns (bool)
  {
    bytes32 computedHash = _leaf;

    for (uint256 i = 0; i < _proof.length; i++) {
      bytes32 proofElement = _proof[i];

      if (computedHash < proofElement) {
        // Hash(current computed hash + current element of the proof)
        computedHash = keccak256(abi.encodePacked(computedHash, proofElement));
      } else {
        // Hash(current element of the proof + current computed hash)
        computedHash = keccak256(abi.encodePacked(proofElement, computedHash));
      }
    }

    // Check if the computed hash (root) is equal to the provided root
    return computedHash == _root;
  }

  function computeMerkleRootInternal(
    bytes32[] hashes
  )
  internal
  returns (bytes32)
  {
    uint n = hashes.length;
    while (n>1) {
      for (uint i = 0; i < n; i+=2) {
        bytes32 h0 = hashes[i];
        bytes32 h1;
        if (i+1 < n) {
          h1 = hashes[i+1];
        }
        if (h0 < h1) {
          hashes[i>>1] = keccak256(abi.encodePacked(h0,h1));
        } else {
          hashes[i>>1] = keccak256(abi.encodePacked(h1,h0));
        }
      }
      if ((n & (n - 1)) != 0) {
        n >>= 1;
        n++;
      } else {
        n >>= 1;
      }
    }
    return hashes[0];
  }
}
