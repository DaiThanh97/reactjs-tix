import { takeLatest, call, put } from 'redux-saga/effects';
import { STATUS_CODE } from '../../configs/status';
import { getListCinemaAct, getDetailMoviesByCinemaAct } from '../actions/cinema.action';
import { GET_DETAIL_MOVIES_BY_CINEMA_SAGA, GET_LIST_CINEMA_SAGA } from '../constants/cinema.constant';
import { cinemaService } from './../../services/cinema.service';

function* getListCinema() {
    const { status, data } = yield call(cinemaService.getListCinema);
    if (status === STATUS_CODE.SUCCEESS) {
        yield put(getListCinemaAct(data));
    }
}

function* getDetailMoviesByCinema() {
    const { status, data } = yield call(cinemaService.getDetailMoviesByCinema);
    if (status === STATUS_CODE.SUCCEESS) {
        yield put(getDetailMoviesByCinemaAct(data));
    }
}

export function* cinemaSaga() {
    yield takeLatest(GET_LIST_CINEMA_SAGA, getListCinema);
    yield takeLatest(GET_DETAIL_MOVIES_BY_CINEMA_SAGA, getDetailMoviesByCinema);
}