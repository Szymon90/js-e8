import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import setIsOpen from './actions/setIsOpen';

function Shell(props) {
    console.log('PROPS SHELL ->> ', props);
    return props.isShellOpen ? (
            <Wrapper onClick={props.setShellIsOpen}>
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

const mapStateToProps = ({ isShellOpen }) => ({
    isShellOpen
});

const mapDispatchToProps = dispatch => ({
    setShellIsOpen: () => dispatch(setIsOpen())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shell);
