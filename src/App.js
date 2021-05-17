import React from 'react';
import TabProvider from './context/TabProvider'
import CampaignAdvertisement from '../src/components/Campaign-Advertisement'

function App() {
  return (
    <div className="App">
        <TabProvider>
          <CampaignAdvertisement />
        </TabProvider>
    </div>
  );
}

export default App;
