import React, { useState, useCallback, useContext } from 'react';
import { TabContext } from '../../context/TabProvider'
import Button from '../Button'
import './index.css';

const TabFooter = ({index, len, handleNextClick, handlePrevClick, onModalClose, page, componentName }) => {
    const { saveData } = useContext(TabContext)
    return (<>
              <footer className="tab-footer">
                    {(index !== 0) ? <Button onClick={handlePrevClick} className="tab-navigate-btn prev">prev</Button>: <div />}
                    <div className="tab-navigate-btn-group">
                        <Button className="tab-navigate-btn" onClick={onModalClose}>cancel</Button>
                        {(index === len) ? 
                            <Button className="tab-navigate-btn action" onClick={() => {
                                saveData({ page, component: componentName })
                                onModalClose()
                            }}>create tracker</Button> 
                            : <Button onClick={handleNextClick} className="tab-navigate-btn next action">next !</Button>}
                    </div>
              </footer>
    </>)
}

const useTabController = () => {
    const [active, updateActiveTab] = useState(0);
    const handleTabClick = useCallback((index) => {
        updateActiveTab(index)
    }, [])

    const handleNextClick = useCallback((index) => {
        updateActiveTab(active + 1);
    }, [active])

    const handlePrevClick = useCallback(() => {
        updateActiveTab(active - 1);
    }, [active])

    return {
        active,
        handleClick: handleTabClick,
        handleNextClick,
        handlePrevClick
    }
}


const Tabs = ({ items = [], children = [], onModalClose, page, componentName }) => {
    const { active, handleClick, handleNextClick, handlePrevClick } = useTabController();
    return (
        <>
            <header className="tabs">
                {items.map((item, index) => <span onClick={() => handleClick(index)} className={`tab ${active === index ? 'selected' : ''}`} key={item}>{item}</span>)}
            </header>
            {children.map((child, index) => active === index ? 
                (<div key={child}>
                    {child}
                    <TabFooter len={items.length - 1} 
                        index={index} 
                        handleNextClick={handleNextClick} 
                        handlePrevClick={handlePrevClick}
                        onModalClose={onModalClose}
                        page={page}
                        componentName={componentName}
                    />
                </div>): null)}
        </>

    )
}

export default Tabs;