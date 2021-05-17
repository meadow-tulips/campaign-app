const mockPostApiCall = (data) => {
    if(!data) return

    /*
    
    Format could very easily be the same manner 
    which I have used to store in the TabProvider.

    {
        data: {
            campaignName: 'mockCampaignName',
            campaignSteps: {
                addBudgetStep: {
                    totalBudget: 'USD344904',
                    totalImpressions: 32394
                },
                channelConfiguration: {
                    mediaChannel: 'digital',
                    channelType: {
                        inApp: true,
                        mobileWeb: true
                    },
                    trackingOptions: {
                        visits: true,
                        transactions: false
                    }

                },
                flightConfigurations: {
                    date: {
                        startDate: '22-11-1999',
                        endDate: '23-11-1999'
                    }
                }
            }
        }
    }
    
    */

    return data
}


const mockGetApi = () => {
    return {
        data: {
            campaignName: 'Manis Ad Mobile',
            campaignSteps: {
                addBudgetStep: {
                    totalBudget: 'USD344904',
                    totalImpressions: 32394
                },
                channelConfiguration: {
                    mediaChannel: 'digital',
                    channelType: {
                        inApp: true,
                        mobileWeb: true
                    },
                    trackingOptions: {
                        visits: true,
                        transactions: false
                    }

                },
                flightConfigurations: {
                    date: {
                        startDate: '22-11-1999',
                        endDate: '23-11-1999'
                    }
                }
            }
        }
    }
}


export {
    mockPostApiCall,
    mockGetApi
}