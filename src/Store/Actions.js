export const LOGIN_USER = 'LOGIN_USER'
export const USER = 'USER'
export const SHOW_LOGIN_BUTTON = 'SHOW_LOGIN_BUTTON'
export const SHOW_LOGOUT_BUTTON = 'SHOW_LOGOUT_BUTTON'
export const LOADING_FB_SDK = 'LOADING_FB_SDK'


export function loginUser(user) {
    return { type: LOGIN_USER, user }
}

export function showLoginButton(show) {
    return { type: SHOW_LOGIN_BUTTON, show }
}

export function showLogoutButton(show) {
    return { type: SHOW_LOGOUT_BUTTON, show }
}

export function loadingFBSDK(loading) {
    return { type: LOADING_FB_SDK, loading }
}