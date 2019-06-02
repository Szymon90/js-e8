import React from 'react';
import styled from 'styled-components';
import { Menu } from '@material-ui/icons';

function Header(props) {

    return (
        <Wrapper>
            <MenuIcon />
            <H2>{props.title}</H2>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: rgb(79,122,171);
    height: 56px;
    max-height: 56px;
    padding: 3px 8px;
`

const H2 = styled.h2`
    font-size: 1.5em;
    color: #fff;

    margin: 0;
`

const MenuIcon = styled(Menu)`
    color: #fff;
`

export default Header;
