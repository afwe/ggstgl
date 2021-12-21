import { put, call, takeLatest, all } from 'redux-saga/effects';
import {
    getCharacterList,
    getUserInfo
} from './actions';

export function getCharacterList(action){
    try{
        const posts = yield call();
        yield put();
    } catch(err) {
        console.log(err);
    }
}

export function getUserInfo(action){
    
}