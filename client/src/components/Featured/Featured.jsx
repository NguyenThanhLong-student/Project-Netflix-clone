import './Featured.scss';
import { Info, PlayArrow } from '@material-ui/icons'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

const Featured = ({ type, setGenre, genre }) => {
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
        const setGenreSelected = () => {
            try {
                let selectGenre = document.getElementById("genre");
                for (let i = 0; i < selectGenre.options.length; i++) {
                    let opt = selectGenre.options[i];
                    if(opt.value==genre) {
                        opt.setAttribute('selected','selected')
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        setGenreSelected();
    },[type]);
    return (
        <div className="featured">
            {
                type && (
                    <div className="category">
                        <span>{type === "movies" ? "Movies" : "Series"}</span>
                        <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
                            <option value="">Genre</option>
                            <option value="Action">Action</option>
                            <option value="Comedy">Comedy</option>
                            <option value="Crime">Crime</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Historical">Historical</option>
                            <option value="Horror">Horror</option>
                            <option value="Romance">Romance</option>
                            <option value="Western">Western</option>
                            <option value="Documentary">Documentary</option>
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
