import { combineReducers } from 'redux';
import albums from './albums';
import visibilityFilter from './visibilityFilter';
import sortKey from "./sortKey";

export default combineReducers({
    albums,
    visibilityFilter,
    sortKey,
});
