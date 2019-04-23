export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const SET_SORT_KEY = 'SET_SORT_KEY';
export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const LOAD_ALBUMS_OK = 'LOAD_ALBUMS_OK';
export const SELECT_ALBUM = 'SELECT_ALBUM';
export const UNSELECT_ALBUM = 'UNSELECT_ALBUM';

export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    payload: {
        filter
    },
});

export const setSortKey = key => ({
    type: SET_SORT_KEY,
    payload: {
        key,
    },
});

export const albumsLoadedOk = albums => ({
    type: LOAD_ALBUMS_OK,
    payload: {
        albums,
    },
})

export const selectAlbum = album => ({
    type: SELECT_ALBUM,
    payload: {
        album
    },
});

export const unselectAlbum = () => ({
    type: UNSELECT_ALBUM,
});
