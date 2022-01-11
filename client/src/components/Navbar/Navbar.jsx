import './Navbar.scss';
import { Search, Notifications, ArrowDropDownSharp } from '@material-ui/icons'
import { useState } from "react"
import { Link } from "react-router-dom";

const Navbar = () => {
    let [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }
    console.log(isScrolled)

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <Link to="/" className="link">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    </Link >
                    <Link to="/" className="link">
                        <span>Home</span>
                    </Link >
                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Movie</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t39.30808-6/241214347_2971882606409135_4060833953803005321_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DVhxCVJOL5QAX9TqyU3&_nc_ht=scontent.fsgn8-2.fna&oh=00_AT-DiYuhrZB9-Hyd70aG0mLRiuftkJ6pxPtq23AawDm6AA&oe=61DD47B8" alt="" />
                    <div className="profile">
                        <ArrowDropDownSharp className="icon" />
                        <div className="options">
                            <span>Setting</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
