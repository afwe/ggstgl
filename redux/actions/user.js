import * as t from '../type'

export const setUserId = (userId)=> dispatch=>{
    dispatch({
        type: t.SET_USER_ID,
        payload: userId
    })
}

export const setuserid = (userId)=> dispatch=>{
    dispatch({
        type: t.SET_USER_ID,
        payload: userId
    })
}