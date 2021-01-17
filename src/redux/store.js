import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSaga from 'redux-saga';
import rootSaga from './sagas/root';

const saga = createSaga();

const rootReducer = combineReducers({

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;