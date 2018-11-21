import { combineReducers } from 'redux';
import albums from './albums';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    albums,
    visibilityFilter,
});
