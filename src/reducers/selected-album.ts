import { SELECT_ALBUM, UNSELECT_ALBUM } from "../actions";
import { Album } from "../interfaces";

interface AlbumAction {
    type: string;
    payload: {
        album: Album;
    };
}

export default (state: Object = {}, action: AlbumAction) => {
    switch (action.type) {
        case SELECT_ALBUM:
            return action.payload.album;
        case UNSELECT_ALBUM:
            return {};
        default:
            return state;
    }
};
