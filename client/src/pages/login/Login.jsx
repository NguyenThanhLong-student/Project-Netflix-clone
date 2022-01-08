import './Login.scss'

const Login = () => {
    return (
        <div className="login">
            <div className="top">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
            </div>
            <div className="container">
                <form action="" className="loginForm">
                    <h1>Sign in</h1>
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button type="submit" className="loginButton">Sign in</button>
                    <span>New to netflix? <b>Sign Up now.</b></span>
                    <small>This page is protected by Google reCaptcha to ensure you're not a bot. <b>Learn more</b></small>
                </form>
            </div>
        </div>
    )
}
export default Login;
