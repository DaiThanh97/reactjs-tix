import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_LIST_MOVIE_SAGA } from '../constants/movie.constant';
import { movieService } from './../../services/movie.service';
import { getListMovieAct } from './../../redux/actions/movie.action';
import { STATUS_CODE } from '../../configs/status';

function* getListMovie() {
    const { status, data } = yield call(movieService.getListMovie);
    if (status === STATUS_CODE.SUCCEESS) {
        yield put(getListMovieAct(data));
    }
}

export function* movieSaga() {
    yield takeLatest(GET_LIST_MOVIE_SAGA, getListMovie);
}