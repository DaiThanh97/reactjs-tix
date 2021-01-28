import { all } from 'redux-saga/effects';
import { movieSaga } from './movie.saga';
import { cinemaSaga } from './cinema.saga';

export default function* rootSaga() {
    yield all([
        movieSaga(),
        cinemaSaga()
    ]);
};