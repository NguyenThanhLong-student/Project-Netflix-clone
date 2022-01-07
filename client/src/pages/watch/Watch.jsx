import './Watch.scss'
import { ArrowBackSharp } from '@material-ui/icons'
import Trailer from '../../public/videos/Trailer.mp4'

const watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackSharp/>
                Home
            </div>
            <video className="video" autoPlay progress controls src={Trailer}></video>
        </div>
    )
}

export default watch
