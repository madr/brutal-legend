import { combineReducers } from 'redux';
import albums from './albums';
import visibilityFilter from './visibility-filter';
import sortKey from "./sort-key";

export default combineReducers({
    albums,
    visibilityFilter,
    sortKey,
});
