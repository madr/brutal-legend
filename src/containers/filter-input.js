import React from 'react';
import { connect } from 'react-redux';
import FilterInput from '../components/filter-input';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = state => ({
    value: state.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
    handleOnChange: filter => dispatch(setVisibilityFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterInput);
