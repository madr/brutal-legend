import { LOAD_ALBUMS_OK } from "../actions";
import { Album } from "../interfaces";

type Action = {
    type: string;
    payload: {
        albums: Array<Album>;
    };
};

export default (state: Array<Album> = [], action: Action) => {
    switch (action.type) {
        case LOAD_ALBUMS_OK:
            const { albums } = action.payload;
            return albums;
        default:
            return state;
    }
};
