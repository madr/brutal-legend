import React from 'react';
import { connect } from 'react-redux';
import SortSelect from '../components/sort-select';
import {setSortKey} from "../actions";

const mapStateToProps = state => ({
    value: state.sortKey
});

const mapDispatchToProps = (dispatch) => ({
  handleOnChange: (key) => dispatch(setSortKey(key))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortSelect);
