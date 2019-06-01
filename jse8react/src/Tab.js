import React from 'react';
import styled from 'styled-components';

const Tab = ({ checked, label, index, setActiveTab, setLol, children}) => {
    return (
        <TabWrapper
            checked={checked}
            onClick={() => setActiveTab(index)}
        >
            {label}
        </TabWrapper>
    )
}

const TabWrapper = styled.div`
    padding: 2px 8px;
    font-size: 13px;
    background-color: ${props => props.checked ? 'blue' : '#eee'};
`;

export default Tab;
