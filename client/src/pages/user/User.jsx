import { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import { AuthContext } from '../../context/authContext/AuthContext';
import './User.scss'

const User = () => {
    const { user, dispatch } = useContext(AuthContext);
    let navigate = useNavigate();
    const emailRef = useRef();
    const [email, setEmail] = useState("");
    const [userUpdate, setUserUpdate] = useState("");
    const handleChange = (e) => {
        const value = e.target.value;
        setUserUpdate({ ...user, [e.target.name]: value });
    }

    const handleFinish = (e) => {
        e.preventDefault();
        alert('Register success!!!');
        navigate("/login", { replace: true });
    }
    return (
        <div class="user">
            <Navbar />
            <div className="userTop">
                <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/241214347_2971882606409135_4060833953803005321_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DVhxCVJOL5QAX9TqyU3&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-DiYuhrZB9-Hyd70aG0mLRiuftkJ6pxPtq23AawDm6AA&oe=61DD47B8" alt="" />
                <span>{user.name}</span>
            </div>
            <div className="userInfo">
                <input value={email} name="email" type="text" onChange={handleChange} />
                <input placeholder="Name" name="name" type="text" onChange={handleChange} />
                <input placeholder="Age" name="age" type="text" onChange={handleChange} />
                <input placeholder="Number Phone" name="numberPhone" type="text" onChange={handleChange} />
                <input placeholder="Password" name="password" type="password" onChange={handleChange} />
                <button className="registerButton" onClick={handleFinish}>Update</button>
            </div>
        </div>
    )
}

export default User
