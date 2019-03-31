import { LOAD_ALBUMS_OK } from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        case LOAD_ALBUMS_OK:
            const { albums } = action.payload;
            return albums;
        default:
            return state;
    }
};
