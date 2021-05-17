import React, { useContext, useEffect } from 'react';
import withModalProps from '../../hocs/withModal'
import { TabContext } from '../../context/TabProvider'
import { mockGetApi } from '../../utils/mockApiCall'
import Tabs from '../Tabs'
import AddBudgetStep from '../Campaign-Steps/AddBudgetStep'
import ConfigureChannelStep from '../Campaign-Steps/ConfigureChannel'
import ConfigureFlightStep from '../Campaign-Steps/ConfigureFlightStep'

const items = ['step 1 - select channel', 'step 2 - flight', 'step 3 - budget']

const ModalContent = ({ onClose }) => {
    const page = 'home';
    const componentName = 'campaignAdvertisement'
    const { data } = (useContext(TabContext) || {});

    return (<section>
        <h6>Campaign Name</h6>
        <h1>{data?.home?.['campaign-advertisement']?.campaignName ?? 'Mock Campaign Name'}</h1>
        <Tabs items={items} onModalClose={onClose} page={page} componentName={componentName}>
            <ConfigureChannelStep />
            <ConfigureFlightStep />
            <AddBudgetStep />
        </Tabs>
    </section>)
}

const CampaignAdvertisment = ({ onShow, show}) => {
    const { initialSetup } = (useContext(TabContext) || {});

    useEffect(() => {
        const response = mockGetApi();
        initialSetup({ page: 'home', component: 'campaign-advertisement'}, response?.data);
    }, [])
    return (
        <>
            <button onClick={onShow}>Click to open Modal</button>
        </>

    )
}


export default withModalProps(CampaignAdvertisment, { useModalContent: ModalContent});