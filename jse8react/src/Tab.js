import React from 'react';


const Tab = ({ checked, label, index, setActiveTab, setLol, children}) => {
    return (
        <div
            onClick={() => setActiveTab(index)}
            style={{color: checked ? 'blue' : 'black'}}
        >
            {label}
        </div>
    )
}

export default Tab;
