import { createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { CookieStorage } from 'redux-persist-cookie-storage';
import Cookies from 'cookies-js';
import reducers from './rootReducer';const persistConfig = {
    key: 'root',
    storage: new CookieStorage(Cookies, {}),
};const rootReducer = persistCombineReducers(persistConfig, reducers);export const reduxStore = createStore(rootReducer, composeWithDevTools());
export const reduxPersistor = persistStore(reduxStore, {});