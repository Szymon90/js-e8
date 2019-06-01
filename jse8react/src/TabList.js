import React, { useState } from 'react';
import styled from 'styled-components';
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
        <TabLIstDiv>
            {tabs.map((tab, index) => (
                <Tab
                    key={`tablist-${index}`}
                    label={tab.label}
                    checked={activeTab === index}
                    index={index}
                    setActiveTab={index => {setActiveTab(index); setTab(index);}}
                />
            ))}
        </TabLIstDiv>
    );
}

const TabLIstDiv = styled.div`
    display: flex;
`;

export default TabList;
