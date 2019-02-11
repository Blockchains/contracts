pragma solidity ^0.4.24;

import "./TokenPool.sol";
import "../../interfaces/ITwoKeyRegistry.sol";
/**
 * @author Nikola Madjarevic
 * Created at 2/5/19
 */
contract TwoKeyCommunityTokenPool is TokenPool {

    address public twoKeyRegistry;
    uint public constant totalAmount2keys = 200000000;
    uint public constant annualTransferAmount = totalAmount2keys / 10;

    uint startingDate;
    uint transferedDuringCurrentYear;
    //TODO: add way to monitor which year we're in from the total years (put "10" in a dedicated var)
    //and add accounting of which year we're currently in, and how much was paid "this" year up till now.

    uint256 [] annualTransfers;

    function setInitialParams(address _twoKeyAdmin, address _erc20Address, address [] _maintainers, address _twoKeyRegistry) public {
        require(initialized == false);
        setInitialParameters(_twoKeyAdmin, _erc20Address, _maintainers);
        twoKeyRegistry = _twoKeyRegistry;
        startingDate = block.timestamp;
        transferedDuringCurrentYear = 0;
        initialized = true;
    }

    /**
     * @notice Function to validate if the user is properly registered in TwoKeyRegistry
     */
    function validateRegistrationOfReceiver(address _receiver) internal view returns (bool) {
        return ITwoKeyRegistry(twoKeyRegistry).checkIfUserExists(_receiver);
    }

    /**
     * @notice Function which does transfer with special requirements with annual limit
     * @param _receiver is the receiver of the tokens
     * @param _amount is the amount of tokens sent
     * @dev Only TwoKeyAdmin contract can issue this call
     */
    function transferTokensToAddress(address _receiver, uint _amount) public onlyTwoKeyAdmin {
        require(validateRegistrationOfReceiver(_receiver) == true);
        require(getContractBalance() > _amount);
        if(startingDate + 365 * (1 days) > block.timestamp) {
            require(annualTransferAmount - transferedDuringCurrentYear > _amount);
        } else {
            annualTransfers.push(transferedDuringCurrentYear);
            transferedDuringCurrentYear = 0;
            require(annualTransferAmount > _amount);
        }
        super.transferTokens(_receiver,_amount);
    }













}
