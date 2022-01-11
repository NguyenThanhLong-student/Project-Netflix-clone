import './Featured.scss';
import { Info, PlayArrow } from '@material-ui/icons'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const Featured = ({ type }) => {
    const [content, setContent] = useState({});
    useEffect(()=>{
        const getRandomContent = async () =>{
            try {
                const res = await axios.get(`movie/getrandom?type=${type}`);
                setContent(res.data[0]);
            } catch (error) {
                console.log(error)
            }
        }
        getRandomContent();
    },[type]);
    return (
        <div className="featured">
            {
                type && (
                    <div className="category">
                        <span>{type === "movies" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre">
                            <option>Genre</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="crime">Crime</option>
                            <option value="fantasy">Fantasy</option>
                            <option value="historical">Historical</option>
                            <option value="horror">Horror</option>
                            <option value="romance">Romance</option>
                            <option value="western">Western</option>
                            <option value="documentary">Documentary</option>
                        </select>
                    </div>
                )
            }
            <img src={content.image}
                alt=""
            />
            <div className="info">
                <img src={content.imageTitle}
                    alt=""
                />
                <span className="desc">
                    {content.desc}
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="moreInfomation">
                        <Info />
                        <span>Info</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Featured
