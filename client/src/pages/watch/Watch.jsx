import './Watch.scss'
import { ArrowBackSharp } from '@material-ui/icons'
import Trailer from '../../public/videos/Trailer.mp4'
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
    const location = useLocation();
    console.log(location)
    return (
        <div className="watch">
            <Link to="/" className="link">
                <div className="back">
                    <ArrowBackSharp />
                    Home
                </div>
            </Link>
            <video className="video" autoPlay progress controls src={Trailer}></video>
        </div>
    )
}

export default Watch
