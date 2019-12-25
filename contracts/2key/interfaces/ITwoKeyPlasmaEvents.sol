pragma solidity ^0.4.24;

contract ITwoKeyPlasmaEvents {
    function emitPlasma2EthereumEvent(address _plasma, address _ethereum) public;
    function emitPlasma2HandleEvent(address _plasma, string _handle) public;
    function emitCPCCampaignCreatedEvent(address proxyCPCCampaignPlasma, address contractorPlasma) public;
    function emitConversionCreatedEvent(address campaignAddressPublic, uint conversionID, address contractor, address converter) public;
    function emitConversionExecutedEvent(uint conversionID) public;
}
