import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga';
import rootSaga from './rootSaga';
import rootReducer from './reducers';

export function initStore(initialState){
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware)
    );
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}