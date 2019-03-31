import { put, takeEvery, all, call } from 'redux-saga/effects';
import { LOAD_ALBUMS, albumsLoadedOk } from '../actions';

export function* loadAlbumsAsync(action) {
  try {
    const { source } = action.payload;
    const data = yield call(() => fetch(source)
      .then(response => response.json())
      .then(data => data), {}
    );
    yield put(albumsLoadedOk(data));
  } catch (error) {
    yield console.error(error);
  }
}

export function* watchLoadAlbumsAsync() {
  yield takeEvery(LOAD_ALBUMS, loadAlbumsAsync);
}

export default function* () {
  yield all([
    watchLoadAlbumsAsync(),
  ])
};
