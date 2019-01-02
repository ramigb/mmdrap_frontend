import { combineReducers } from 'redux'
import {
    LOGIN_USER,
    SHOW_LOGIN_BUTTON,
    SHOW_LOGOUT_BUTTON,
    LOADING_FB_SDK
} from './Actions'

const initUserState = {
    id: window.FB && window.FB.getUserID() || undefined,
    name: undefined
}

const user = (state = initUserState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return action.user
        default:
            return state
    }
}

const initUIState = {
    showLoginButton: false,
    showLogoutButton: false,
    loadingFBSDK: true
}

const UI = (state = initUIState, action) => {
    switch (action.type) {
        case SHOW_LOGIN_BUTTON:
            return {...state, showLoginButton: action.show}
        case SHOW_LOGOUT_BUTTON:
            return {...state, showLogoutButton: action.show}
        case LOADING_FB_SDK:
            return {...state, loadingFBSDK: action.loading}
        default:
            return state
    }
}



const reducers = combineReducers({
    user,
    UI
})

export default reducers