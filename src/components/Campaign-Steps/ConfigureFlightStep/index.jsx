import React, { useState, useContext, useEffect, useMemo } from 'react';
import { TabContext } from '../../../context/TabProvider'
import { formatDate, formateDateInDateMonthYear } from '../../../utils/format-date'
import Input from '../../Input'
import '../common.css';
import './index.css';

const ConfigureFlight = () => {
    const page = 'home'
    const component = 'campaign-advertisement'
    const tab = 'configure-flight'

    const {data, setDataForTab} = (useContext(TabContext) || {});
    const [date, updateDate] = useState(data?.[page]?.[component]?.[tab]?.date ?? {});

    const formattedDate = useMemo(() => {
        return { startDate: formateDateInDateMonthYear(date.startDate), endDate: formateDateInDateMonthYear(date.endDate) };
    }, [date])


    useEffect(() => {
        setDataForTab && setDataForTab({ page, component, tab }, { date })
    }, [date])

    return (
        <section className="configure-flight step">
            <p className="info">Select when the campaign start and end</p>
            <div className="input-container">
                    <div>
                    <Input 
                        placeholder=""
                        id="date-start"
                        name="dateStart"
                        type="date" 
                        labelText="START"
                        min={formatDate(new Date())}
                        value={date.startDate}
                        onChange={(e) => updateDate({ startDate: e?.target.value, endDate: ''})}
                        />
                        <span className="formatted-date">{formattedDate?.startDate}</span>
                    </div>
                    <div>
                        <Input
                            placeholder=""
                            type="date" 
                            name="dateEnd"
                            id="date-end"
                            labelText="END"
                            min={date?.startDate || new Date()} 
                            value={date.endDate}
                            onChange={(e) => updateDate({...date, endDate: e?.target.value})}
                        />
                        <span className="formatted-date">{formattedDate?.endDate}</span>
                    </div>
                </div>
        </section>
    )
}

export default ConfigureFlight;