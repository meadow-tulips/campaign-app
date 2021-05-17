const tranformResponseForProvider = (data) => {
    const steps = data?.campaignSteps;
    const campaignName = data?.campaignName;
    return {
        ...steps,
        campaignName
    }
}

export {
    tranformResponseForProvider
}