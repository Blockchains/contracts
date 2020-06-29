pragma solidity ^0.4.24;

import "../upgradable-pattern-campaigns/UpgradeableCampaign.sol";
import "../TwoKeyConversionStates.sol";
import "./TwoKeyPlasmaCampaignNoReward.sol";


contract TwoKeyCPCCampaignPlasmaNoReward is UpgradeableCampaign, TwoKeyPlasmaCampaignNoReward, TwoKeyConversionStates {

    string public targetUrl;            // Url being tracked

    /**
     * This is the conversion object
     * converterPlasma is the address of converter
     * bountyPaid is the bounty paid for that conversion
     * conversionTimestamp is the timestamp of a block in which conversion happened
     * state is the current state of conversion, implements enum ConversionState
     */
    struct Conversion {
        address converterPlasma;
        uint bountyPaid;
        uint conversionTimestamp;
        ConversionState state;
    }

    Conversion [] conversions;          // Array of all conversions


    function setInitialParamsCPCCampaignPlasmaNoRewards(
        address _twoKeyPlasmaSingletonRegistry,
        address _contractor,
        string _url,
        uint [] numberValues
    )
    public
    {
        require(isCampaignInitialized == false);                        // Requiring that method can be called only once
        isCampaignInitialized = true;                                   // Marking campaign as initialized

        TWO_KEY_SINGLETON_REGISTRY = _twoKeyPlasmaSingletonRegistry;    // Assigning address of _twoKeyPlasmaSingletonRegistry
        contractor = _contractor;                                       // Assigning address of contractor
        targetUrl = _url;                                               // Set the URL being tracked for the campaign
        contractorPublicAddress = ethereumOf(_contractor);              // Set contractor contractorPublicAddress

        campaignStartTime = numberValues[0];                            // Set when campaign starts
        campaignEndTime = numberValues[1];                              // Set when campaign ends
        conversionQuota = numberValues[2];                              // Set conversion quota
        totalSupply_ = numberValues[3];                                 // Set total supply

        incentiveModel = IncentiveModel.NO_REFERRAL_REWARD;               // Set the incentiveModel selected for the campaign
        received_from[_contractor] = _contractor;                       // Set that contractor has joined from himself
        balances[_contractor] = totalSupply_;                           // Set balance of arcs for contractor to totalSupply

        counters = new uint[](7);                                       // Initialize array of counters
    }


    /**
     * @notice          Function to convert on the campaign, passing the signature
     *
     * @param           signature is the signature containing information about the link path
     *                  across the web
     */
    function convert(
        bytes signature
    )
    contractNotLocked
    isCampaignValidated
    onlyIfContractActiveInTermsOfTime
    public
    {
        // Require that this is his first conversion
        require(isConverter(msg.sender) == false);
        // Save converter signature on the blockchain
        converterToSignature[msg.sender] = signature;

        // Create conversion
        Conversion memory c = Conversion(
            msg.sender,
            0,
            block.timestamp,
            ConversionState.PENDING_APPROVAL
        );

        // Get the ID and update mappings
        uint conversionId = conversions.length;
        conversions.push(c);
        converterToConversionId[msg.sender] = conversionId;
        counters[0]++; //Increase number of pending converters and conversions
        counters[3]++; //Increase number of pending conversions

        //Emit conversion event through TwoKeyPlasmaEvents
        ITwoKeyPlasmaEventSource(getAddressFromTwoKeySingletonRegistry("TwoKeyPlasmaEventSource")).emitConversionCreatedEvent(
            mirrorCampaignOnPublic,
            conversionId,
            contractor,
            msg.sender
        );
    }


    /**
     * @notice          Function to approve converter and execute conversion, can be called once per converter
     *
     * @param           converter is the plasma address of the converter
     */
    function approveConverterAndExecuteConversion(
        address converter
    )
    public
    contractNotLocked
    onlyMaintainer
    isCampaignValidated
    {
        //Check if converter don't have any executed conversions before and approve him
        oneTimeApproveConverter(converter);
        // Get the converter signature
        bytes memory signature = converterToSignature[converter];
        // Distribute arcs if necessary
        distributeArcsIfNecessary(converter, signature);
        //Get the conversion id
        uint conversionId = converterToConversionId[converter];
        // Get the conversion object
        Conversion storage c = conversions[conversionId];
        // Update state of conversion to EXECUTED
        c.state = ConversionState.EXECUTED;
        // Get the address of plasma event source
        address twoKeyPlasmaEventSource = getAddressFromTwoKeySingletonRegistry("TwoKeyPlasmaEventSource");

        updateReferralChain(converter, conversionId);

        counters[0]--; //Decrement number of pending converters
        counters[1]++; //increment number approved converters
        counters[3]--; // Decrement number of pending conversions
        counters[5]++; //increment number of executed conversions

        //Emit event through TwoKeyEventSource that conversion is approved and executed
        ITwoKeyPlasmaEventSource(twoKeyPlasmaEventSource).emitConversionExecutedEvent(
            conversionId
        );
    }


    /**
     * @notice          Function to reject converter and his conversion
     *
     * @param           converter is the address of the converter
     * @param           rejectionStatusCode is the status code why is converter rejected
     */
    function rejectConverterAndConversion(
        address converter,
        uint rejectionStatusCode
    )
    public
    contractNotLocked
    onlyMaintainer
    isCampaignValidated
    {
        require(isApprovedConverter[converter] == false);

        // Get the conversion ID
        uint conversionId = converterToConversionId[converter];

        // Get the conversion object
        Conversion storage c = conversions[conversionId];

        require(c.state == ConversionState.PENDING_APPROVAL);
        c.state = ConversionState.REJECTED;

        counters[0]--; //reduce number of pending converters
        counters[2]++; //increase number of rejected converters
        counters[3]--; //reduce number of pending conversions
        counters[4]++; //increase number of rejected conversions

        ITwoKeyPlasmaEventSource(getAddressFromTwoKeySingletonRegistry("TwoKeyPlasmaEventSource")).emitConversionRejectedEvent(
            conversionId,
            rejectionStatusCode
        );
    }

    /**
     * @notice          Function which will serve as a getter for conversion object
     * @param           _conversionId is the id of the conversion
     */
    function getConversion(
        uint _conversionId
    )
    public
    view
    returns (address, uint, uint, ConversionState)
    {
        Conversion memory c = conversions[_conversionId];

        return (
            c.converterPlasma,
            c.bountyPaid,
            c.conversionTimestamp,
            c.state
        );
    }

}
