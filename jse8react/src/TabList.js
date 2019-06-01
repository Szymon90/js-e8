import React, { useState } from 'react';
import Tab from './Tab';

const tabs = [{
    label: 'Sport'
}, {
    label: 'Polityka'
}, {
    label: 'Gospodarka'
}];


const TabList = ({
    activeTab: defaultActiveTab,
    setActiveTab: setTab
}) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    return (
        <div style={{display: 'flex'}}>
            {tabs.map((tab, index) => (
                <Tab
                    key={`tablist-${index}`}
                    label={tab.label}
                    checked={activeTab === index}
                    index={index}
                    setActiveTab={index => {setActiveTab(index); setTab(index);}}
                />
            ))}
        </div>
    );
}

export default TabList;
