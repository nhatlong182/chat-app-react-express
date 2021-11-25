import axios from 'axios'

export const login = async (user, dispatch) => {
    dispatch({ type: "LOGIN_REQUEST" })
    try {
        const res = await axios.post('/api/users/login', user)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
    } catch (error) {
        dispatch({ type: "LOGIN_FAIL", payload: error })
    }
}