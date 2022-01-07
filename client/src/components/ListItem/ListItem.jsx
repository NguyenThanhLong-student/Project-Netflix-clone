import './ListItem.scss'
import Trailer from '../../public/videos/Trailer.mp4'
import { Add, PlayArrow, ThumbDown, ThumbUp } from '@material-ui/icons'
import { useState } from 'react'

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div className="ListItem"
            style={{ left: isHovered && index * 220 - 50 + index * 5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="https://newmediarockstars.com/wp-content/uploads/2016/01/Who-Is-Doctor-Strange-Thumbnail-450x279.jpg" alt="" />
            {isHovered && (
                <>
                    <video src={Trailer} autoplay="true" loop></video>
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUp className="icon"/>
                            <ThumbDown className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 Hours 40 Minutes</span>
                            <span className="limit">16+</span>
                            <span>2019</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta maxime qui perspiciatis eum consequuntur quibusdam nesciunt labore dolore saepe!
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}

export default ListItem
