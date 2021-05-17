import React, { useState, useContext, useEffect, useCallback } from 'react';
import { TabContext } from '../../../context/TabProvider'
import Input from '../../Input'
import MobileIcon from '../../IconSvgs/mobile'
import OutOfHomeIcon from '../../IconSvgs/out-of-home';
import TvIcon from '../../IconSvgs/tv';
import RadioIcon from '../../IconSvgs/radio';
import './index.css';

const ConfigureChannel = () => {
    const page = 'home'
    const component = 'campaign-advertisement'
    const tab = 'configure-channel'
    const { data, setDataForTab }  = (useContext(TabContext) || {});


    const [mediaChannel, updateMediaChannel] = useState(data?.[page]?.[component]?.[tab]?.mediaChannel ?? '');

    const [channelTypes, updateChannelTypes] = useState(data?.[page]?.[component]?.[tab]?.channelTypes ?? {});

    const [trackingOptions, updateTrackingOptions] = useState(data?.[page]?.[component]?.[tab]?.trackingOptions ?? {});

    const onCheckboxChange = useCallback((event, type) => {
        if(event?.target?.name) {
            if(type === 'channelTypes')
                updateChannelTypes({...channelTypes, [event.target.name]: !Boolean(event.target.value)})
            else if(type === 'trackingOptions')
                updateTrackingOptions({...trackingOptions, [event.target.name]: !Boolean(event.target.value)})
        }
    }, [channelTypes, trackingOptions])


    useEffect(() => {
        setDataForTab && setDataForTab({ page, component, tab }, { mediaChannel, channelTypes, trackingOptions })
    }, [mediaChannel, channelTypes, trackingOptions])

    

    return (
        <section className="configure-channel step">
            <p className="info">Select the channel of your campaign</p>

            <div className="media-channel-container">
                <Input id="digital" name="media-channel" type="radio" value="digital" 
                    getLabelContent={() => (
                        <div className={`label-content ${mediaChannel === 'digital' ? 'selected': ''}`}>
                                <MobileIcon />
                                <p>Digital</p>
                        </div>
                    )}
                    onChange={(e) => updateMediaChannel(e.target.value)}
                    selected={mediaChannel === 'digital'}
                />
                <Input id="out-of-home" name="media-channel" type="radio" value="out-of-home"
                     getLabelContent={() => (
                        <div className={`label-content ${mediaChannel === 'out-of-home' ? 'selected': ''}`}>
                                <OutOfHomeIcon />
                                <p>Out of Home</p>
                        </div>
                    )}
                    onChange={(e) => updateMediaChannel(e.target.value)}
                    selected={mediaChannel === 'out-of-home'}
                />
                <Input id="tv" name="media-channel" type="radio" value="tv"
                    getLabelContent={() => (
                        <div className={`label-content ${mediaChannel === 'tv' ? 'selected': ''}`}>
                                <TvIcon />
                                <p>TV</p>
                        </div>
                    )}
                    onChange={(e) => updateMediaChannel(e.target.value)}
                    selected={mediaChannel === 'tv'}
                />
                <Input id="radio" name="media-channel" type="radio" value="radio" 
                    getLabelContent={() => (
                        <div className={`label-content ${mediaChannel === 'radio' ? 'selected': ''}`}>
                                <RadioIcon />
                                <p>Radio</p>
                        </div>
                    )}
                    onChange={(e) => updateMediaChannel(e.target.value)}
                    selected={mediaChannel === 'radio'}
                />
            </div>
            <div className="channel-types">
                <h5>Type of Channels</h5>
                <Input name="inApp" id="inApp" type="checkbox" labelText="in app" onChange={(ev) => onCheckboxChange(ev, 'channelTypes')} value={channelTypes['inApp']} checked={Boolean(channelTypes['inApp'])} />
                <Input name="mobileWeb" id="mobile-web" type="checkbox" labelText="mobile web" onChange={(ev) => onCheckboxChange(ev, 'channelTypes')} value={channelTypes['mobileWeb']} checked={Boolean(channelTypes['mobileWeb'])} />
                <Input name="desktop" id="desktop" type="checkbox" labelText="desktop" onChange={(ev) => onCheckboxChange(ev, 'channelTypes')} value={channelTypes['desktop']} checked={Boolean(channelTypes['desktop'])} />
                <Input name="socialMedia" id="social-media" type="checkbox" labelText="social media" onChange={(ev) => onCheckboxChange(ev, 'channelTypes')} value={channelTypes['socialMedia']} checked={Boolean(channelTypes['socialMedia'])} />
                <Input name="paidSearch" id="paid-search" type="checkbox" labelText="paid search" onChange={(ev) => onCheckboxChange(ev, 'channelTypes')} value={channelTypes['paidSearch']} checked={Boolean(channelTypes['paidSearch'])} />
                <Input name="email" id="email" type="checkbox" labelText="email" onChange={(ev) => onCheckboxChange(ev, 'channelTypes')} value={channelTypes['email']} checked={Boolean(channelTypes['email'])} />
                <Input name="leadForm" id="lead-form" type="checkbox" labelText="lead form" onChange={(ev) => onCheckboxChange(ev, 'channelTypes')} value={channelTypes['leadForm']} checked={Boolean(channelTypes['leadForm'])}/>
                <Input name="landingPage" id="landing-page" type="checkbox" labelText="landing page" onChange={(ev) => onCheckboxChange(ev, 'channelTypes')} value={channelTypes['landingPage']} checked={Boolean(channelTypes['landingPage'])} />
            </div>

            <div className="tracking-options">
                <h5>Tracking Options</h5>
                <p>Attribution Type</p>
                <Input name="visits" id="visits" type="checkbox" labelText="visits" onChange={(ev) => onCheckboxChange(ev, 'trackingOptions')} value={trackingOptions['visits']} checked={Boolean(trackingOptions['visits'])}/>
                <Input name="transaction" id="transaction" type="checkbox" labelText="transaction" onChange={(ev) => onCheckboxChange(ev, 'trackingOptions')} value={trackingOptions['transaction']} checked={Boolean(trackingOptions['transaction'])} />
            </div>
        </section>
    )
}

export default ConfigureChannel;