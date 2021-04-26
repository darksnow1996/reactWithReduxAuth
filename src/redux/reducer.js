import {combineReducers} from "redux"

import * as actions from "./actions"

const merge = (prev, next) => Object.assign({}, prev, next)

const authReducer = (state={
    isAuthenticated:false,
     loginErr : '' }, action) => {
    if(action.type === actions.USER_LOGGED_IN){
        return merge(state,{
            user:action.payload.user,
             isAuthenticated:true ,
             token:action.payload.token })
    }
    else if(action.type ===  actions.USER_LOG_IN_REJECTED){
        return merge(state, {loginErr: action.payload})
    }
    else if(action.type === actions.USER_LOGGED_OUT){
        return merge(state, {isAuthenticated:false})
    }
    else if(action.type === actions.USER_SESSION_EXPIRED){
        return merge(state, {isAuthenticated:false})
    }

    return state;
}



// const userReducer = (state = {}, action) => {
//   switch (action.type) {
//     case UPDATE_USER:
//       return merge(state, action.payload)
    
//     case LOG_IN_FULFILLED:
//       return merge(state, {token: action.payload})
//     case LOG_IN_REJECTED:
//       return merge(state, {loginErr: action.payload})
//     default:
//       return state
//   }
// }

const reducer = combineReducers({
  auth: authReducer,
  
})

export default reducer