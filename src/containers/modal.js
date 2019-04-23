import React from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modal';
import { unselectAlbum } from '../actions';

const mapStateToProps = state => ({
    ...state.selectedAlbum,
});

const mapDispatchToProps = dispatch => ({
    handleOnClick: album => dispatch(unselectAlbum(album)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
