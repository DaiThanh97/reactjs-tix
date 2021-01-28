import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSaga from 'redux-saga';
import rootSaga from './sagas/root';
import movieReducer from './reducers/movie.reducer';
import cinemaReducer from './reducers/cinema.reducer';
import loadingReducer from './reducers/loading.reducer';

const saga = createSaga();

const rootReducer = combineReducers({
    movieReducer,
    cinemaReducer,
    loadingReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;