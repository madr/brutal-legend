export const INIT_ALBUM_LIST = 'INIT_ALBUM_LIST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_SORT_KEY = 'SET_SORT_KEY';

export const initAlbumList = payload => ({
    type: INIT_ALBUM_LIST,
    payload
});

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    payload: {
        filter,
    }
});

export const setSortKey = key => ({
    type: SET_SORT_KEY,
    payload: {
        key,
    }
});
