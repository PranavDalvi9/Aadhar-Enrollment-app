export const LOGIN_SUCCESS = "LOGIN_SUCCESS"

export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const LOGOUT = "LOGOUT"

export const ADMIN_SUCCESS = "ADMIN_SUCCESS"

export const ADMIN_FAIL = "ADMIN_FAIL"

export const loginSuccess = (payload) => ({
    type: LOGIN_SUCCESS,
    payload
})

export const loginFailure = () => ({
    type: LOGIN_FAILURE
})

export const logout = () => ({
    type: LOGOUT
})

export const adminSuccess = (payload) => ({
    type: ADMIN_SUCCESS,
    payload
})

export const adminFail = () => ({
    type: ADMIN_FAIL
})