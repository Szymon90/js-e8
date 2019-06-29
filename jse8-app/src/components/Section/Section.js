import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import withFetchData from '../withFetchData';
import { fetchDataSuccess } from './actions';
import get from '../../utils/get';

const path = '/collections/:id/photos?page=1&perPage=10&orderBy=latest';

function Section({ photos }) {
    return photos.length && (
        <Wrapper>
            {photos.map(
                (item, index) => {
                    const imgSrc = get(item, 'cover_photo.urls.thumb', '');
                    return (
                        <Link to={`/photo/${item.id}`}>
                            <Container>
                                <h3>{item.title}</h3>
                                {imgSrc && <img src={imgSrc} alt="" />}
                                <p>{item.description}</p>
                            </Container>
                        </Link>
                    )
                }
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

const Container = styled.div`
    background-color: #ffffff;
    border: 1px solid #000;

`

const mapStateToProps = ({ photos }) => ({
    photos
})

const mapDispatchToProps = dispatch => ({
    fetchDataSuccess: compose(dispatch, fetchDataSuccess)
})

const mergeProps = (fromState ={}, fromDispatch ={}, ownProps) => ({
    path: path.replace(':id', ownProps.match.params.id),
    ...fromState,
    ...fromDispatch
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps, mergeProps),
    withFetchData
)(Section)
