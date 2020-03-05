import { put, takeEvery, all, call } from "redux-saga/effects";
import { LOAD_ALBUMS, albumsLoadedOk } from "../actions";

function* watchLoadAlbumsAsync() {
    yield takeEvery(LOAD_ALBUMS, loadAlbumsAsync);
}

function* loadAlbumsAsync(action: LoadAlbumsAction) {
    try {
        const { source } = action.payload;
        const data = yield call(
            () =>
                fetch(source)
                    .then(response => response.json())
                    .then(data => data),
            {}
        );
        yield put(albumsLoadedOk(data));
    } catch (error) {
        yield console.error(error);
    }
}

export default function*() {
    yield all([watchLoadAlbumsAsync()]);
}

interface LoadAlbumsAction {
    payload: {
        source: string;
    };
}
