import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import withFetchData from '../withFetchData';
import { fetchDataSuccess } from './actions';

const path = '/collections?page=1&perPage=10&orderBy=latest';

function Sections({ sections }) {
    return sections.length && (
        <Wrapper>
            {sections.map(
                (item, index) => (
                    <Section>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Section>
                )
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin-top: 86px
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
`

const Section = styled.div`
    background-color: #ffffff;
    border: 1px solid #000;

`

const mapStateToProps = ({sections }) => ({
    sections
})

const mapDispatchToProps = dispatch => ({
    fetchDataSuccess: compose(dispatch, fetchDataSuccess)
})

const mergeProps = (fromState, fromDispatch) => ({
    path,
    ...fromState,
    ...fromDispatch
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps, mergeProps),
    withFetchData
)(Sections)
