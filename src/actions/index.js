export const INIT_ALBUM_LIST = 'INIT_ALBUM_LIST';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

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
