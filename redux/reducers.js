import { handleActions } from "redux-actions";
import * as types from "./action-types";
let defaultState={
    characterList: []
}
const reducerCreators=handleActions(
    {
        [types.GET_CHARACTER_SUCCESS]: (state, action)=>{
            return {
                ...state,
                characterList: action.payload
            }
        },
        [types.GET_USER_INFO]: (state, action)=>{
            return{
                ...state,
                user: action.payload
            }
        }
    },
    defaultState
)
export default reducerCreators;