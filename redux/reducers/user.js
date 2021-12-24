import * as t from '../type';
const user = (state ={
    userId: '未登录'
}, action) =>{
    switch(action.type){
        case t.SET_USER_ID:
            return{
                ...state,
                userId: action.payload
            };
        default:
            return{...state}
    }
}
export default user;