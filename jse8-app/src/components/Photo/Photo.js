import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import withFetchData from '../withFetchData';
import { fetchDataSuccess } from './actions';

const path = '/photos/:id';

function Photo({ photo }) {
    return photo && (
        <div style={{marginTop: '86px'}}>
            <h3>{photo.location.title}</h3>
            <img src={photo.urls.regular} alt="" />
            <div>
                <div>Likes: {photo.likes}</div>
                <div>Views: {photo.views}</div>
                <div>Downloads: {photo.downloads}</div>
            </div>
        </div>
    )
}

const mapStateToProps = ({ photo }) => ({
    photo
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
)(Photo);
