import React, { useState, useContext, useEffect } from 'react';
import { TabContext } from '../../../context/TabProvider'
import Input from '../../Input';
import '../common.css';


const AddBudgetStep = () => {
    const page = 'home'
    const component = 'campaign-advertisement'
    const tab = 'add-budget'

    const {data, setDataForTab } = (useContext(TabContext) || {});

    const [totalBudget, updateTotalBudget] = useState(data?.[page]?.[component]?.[tab]?.totalBudget ?? '');
    const [totalImpressions, updateTotalImpressions] = useState(data?.[page]?.[component]?.[tab]?.totalImpressions ?? '');

    useEffect(() => {
        setDataForTab && setDataForTab({ page, component, tab }, { totalBudget, totalImpressions })
    }, [totalBudget, totalImpressions])

    return (
        <section className="budget-step step">
                <p className="info">How much is your campaign budget?</p>
                <div className="input-container">
                    <Input
                        name="totalBudget"
                        id="total-budget"
                        type="text" 
                        labelText="Total Budget" 
                        value={totalBudget}
                        onChange={(e) => updateTotalBudget(e.target.value)}
                    />
                    <Input
                        name="totalImpressions"
                        id="total-impressions"
                        type="number" 
                        labelText="Total Impressions" 
                        value={totalImpressions}
                        onChange={(e) => updateTotalImpressions(e.target.value)}
                    />
                </div>
        </section>
    )
}

export default AddBudgetStep;