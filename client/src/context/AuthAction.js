export const LoginRequest = (userCredentials) => ({
    type: "LOGIN_REQUEST"
})

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
})

export const LoginFail = () => ({
    type: "LOGIN_FAIL",
    payload: error
})