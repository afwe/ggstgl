import { createActions } from 'redux-acitons';
export const{
    getCharacterList,
    getUserInfo
} = createActions({
    GET_CHARACTER_LIST: data => {
        return data;
    },
    GET_USER_INFO: data => {
        return data;
    }
})