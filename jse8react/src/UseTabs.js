import React, { useState } from 'react'
import TabList from './TabList'
import TabPanel from './TabPanel'

const UseTab = () => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div>
            <TabList
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />
            {activeTab === 1 && <TabPanel name="Polityka" />}
            {activeTab === 2 && <TabPanel name="Gospodarka" />}
            {activeTab === 0 && <TabPanel name="Sport" />}
        </div>
    );
}

export default UseTab;
