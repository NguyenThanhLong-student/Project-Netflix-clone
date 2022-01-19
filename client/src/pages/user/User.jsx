import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import { AuthContext } from '../../context/authContext/AuthContext';
import { updateUser } from '../../context/userContext/apiCall';
import { UserContext } from '../../context/userContext/UserContext';
import './User.scss'

const User = () => {
    const { user } = useContext(AuthContext);
    const [userInfo, SetUserInfo] = useState({});
    useEffect(() => {
        const getUserInfo = async () => {
            const res = await axios.get('user/get/' + user._id, { headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken } });
            SetUserInfo(res.data);
        }
        getUserInfo();
    }, [user._id])
    const { dispatch } = useContext(UserContext);
    let navigate = useNavigate();
    const [userUpdate, setUserUpdate] = useState(user);
    const [userUpdatePassword, setUserUpdatePassword] = useState({"_id": user._id});
    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        const value = e.target.value;
        setUserUpdate({ ...userUpdate, [e.target.name]: value });
    }
    const handleChangePassword = (e) => {
        const value = e.target.value;
        setUserUpdatePassword({ ...userUpdatePassword, [e.target.name]: value });
    }
    const updateInfo = (e) => {
        e.preventDefault();
        updateUser(userUpdate, dispatch);
        alert("Update sucessfully!");
    }
    const updatePassword = (e) => {
        e.preventDefault();
        updateUser(userUpdatePassword, dispatch);
        alert("Update sucessfully!");
        navigate("/", { replace: true });
    }
    const changePassword = () => {
        const divChange = document.getElementsByClassName("changePassword")[0];
        if (divChange.getAttribute("style") === "display: flex") {
            divChange.setAttribute("style", "display: none");
            setShow(false)
        }
        else {

            divChange.setAttribute("style", "display: flex");
            setShow(true)
        }
    }
    return (
        <div className="user">
            <Navbar />
            <div className="userTop">
                <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/241214347_2971882606409135_4060833953803005321_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DVhxCVJOL5QAX9TqyU3&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-DiYuhrZB9-Hyd70aG0mLRiuftkJ6pxPtq23AawDm6AA&oe=61DD47B8" alt="" />
                <span>{user.name}</span>
            </div>
            <div className="userInfo">
                <input defaultValue={userInfo.email} name="email" type="text" onChange={handleChange} />
                <input defaultValue={userInfo.name} name="name" type="text" onChange={handleChange} />
                <input defaultValue={userInfo.age} name="age" type="text" onChange={handleChange} />
                <input defaultValue={userInfo.numberPhone} name="numberPhone" type="text" onChange={handleChange} />
                <div className="button">
                    <button className="registerButton" onClick={updateInfo}>Update Info</button>
                </div>
            </div>
            <div className="changePasswordButtonDiv" onClick={changePassword}>
                <p className="changePasswordButton">Change Password</p>
                {
                    show ? <ArrowDropUp /> : <ArrowDropDown />
                }

            </div>
            <div className="changePassword">
                <div className="yourPassword inputPassword">
                    <span>Your password</span>
                    <input placeholder="Password" name="oldPassword" type="password" onChange={handleChangePassword} />
                </div>
                <div className="newPassword inputPassword">
                    <span>New password</span>
                    <input placeholder="New password" name="Password" type="password" onChange={handleChangePassword} />
                </div>
                <div className="button">
                    <button className="registerButton" onClick={updatePassword}>Update Password</button>
                </div>
            </div>
        </div>
    )
}

export default User
