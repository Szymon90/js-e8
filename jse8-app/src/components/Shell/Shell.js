import React, { useState } from 'react';
import styled from 'styled-components';

function Shell() {
    /* const isOpenState = useState();
    const isOpen = isOpenState[0];
    const setIsOpen = isOpenState[1]; */
    const [isOpen, setIsOpen] = useState(false);
    return isOpen ? (
            <Wrapper>
                <ShellWrapper />
            </Wrapper>
        ) : null;
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
`;

const ShellWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    max-width: 260px;
    width: 100%;
`;

export default Shell;
