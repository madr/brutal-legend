import { combineReducers } from "redux";
import albums from "./albums";
import visibilityFilter from "./visibility-filter";
import sortKey from "./sort-key";
import selectedAlbum from "./selected-album";

export default combineReducers({
    albums,
    visibilityFilter,
    sortKey,
    selectedAlbum
});
