import axios from 'axios';
import { loginFailure, loginStart, loginSuccess,logout,registerStart,registerSuccess,registerFailure } from './AuthAction';

export const login = async (user,dispatch) => {
    dispatch(loginStart());
    try {
        const res = await axios.post('auth/login',user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
        console.error(error)
    }
}

export const logoutfunc = async (dispatch) => {
    try {
        dispatch(logout());
    } catch (error) {
        console.error(error)
    }
}

// create User

export const register = async (user, dispatch) => {
    dispatch(registerStart());
    try {
      const res = await axios.post("/auth/register",user);
      dispatch(registerSuccess(res.data));
    } catch (err) {
      dispatch(registerFailure());
    }
  };