import './Login.scss'

import {useContext, useState} from 'react'
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCall';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, dispatch} = useContext(AuthContext);
    const handleClick = (e) => {
        e.preventDefault();
        login({email,password},dispatch);
    }
    return (
        <div className="login">
            <div className="top">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
            </div>
            <div className="container">
                <form action="" className="loginForm">
                    <h1>Sign in</h1>
                    <input name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <input name="password" type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)}/>
                    <button className="loginButton" onClick={handleClick} disabled={isFetching}>Sign in</button>
                    <span>New to netflix? <b>Sign Up now.</b></span>
                    <small>This page is protected by Google reCaptcha to ensure you're not a bot. <b>Learn more</b></small>
                </form>
            </div>
        </div>
    )
}
export default Login;
