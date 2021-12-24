import * as t from '../type'

export const setInfo = (name)=> dispatch=>{
    dispatch({
        type: t.SET_NAME,
        payload: name
    })
}