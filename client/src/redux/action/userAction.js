import axios from "axios";
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, } from "../constant/userConstant.js";


export const login = (email, password) => async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
        const res = await axios.post('/api/users/login', { email, password });
        dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
        sessionStorage.setItem('userInfo', JSON.stringify(res.data));
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error
        });
    }
}

export const signout = () => async (dispatch) => {
    sessionStorage.removeItem('userInfo');
    dispatch({ type: USER_LOGOUT });
    document.location.href = '/login';
}