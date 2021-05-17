import React, { useCallback, useState } from 'react'
import { mockPostApiCall } from '../../utils/mockApiCall'
import { tranformResponseForProvider } from '../../utils/transform/index'

const Context = React.createContext({
    data: {},
    initialSetup: () => {},
    setDataForTab: () => {},
    saveData: () => {},
})

const TabProvider = ({ children }) => {
    const [data, updateData] = useState({});
    
    const initialSetup = useCallback(({ page = '', component = ''} = {}, dataParam = {}) => {
        let transformedData = {};
        if(dataParam)
            transformedData = tranformResponseForProvider(dataParam)
        updateData({...data, [page]: { [component]: {
            ...transformedData
        }}})
    }, [data])

    const saveData = useCallback(({ page = '', component = '' } = {}) => {
        alert('Data Saved, Thanks');
        mockPostApiCall(data?.[page]?.[component]);
    }, [data])

    const setDataForTab = useCallback(({ page = '', component = '', tab = ''} = {}, tabData) => {
        updateData({...data, 
            [page]: 
                { ...data?.[page], 
                    [component]: {
                        ...data?.[page]?.[component],
                        [tab]: {
                            ...data?.[page]?.[component]?.[tab],
                            ...tabData
                        }

        }}})
    }, [data])

    return (
      <Context.Provider
        value={{
            data,
            initialSetup,
            setDataForTab,
            saveData
        }}
      >
        {children}
      </Context.Provider>
    )
}


export default TabProvider

export const TabContext = Context;
