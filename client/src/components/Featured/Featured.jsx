import './Featured.scss';
import {Info, PlayArrow} from '@material-ui/icons'

const Featured = ({type}) => {
    return (
        <div className="featured">
            {
                type && (
                    <div className="category">
                        <span>{type==="movie" ? "Movies" : "Series"}</span>
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
            <img src="https://static2.vieon.vn/vieplay-image/carousel_web_v4_ntc/2021/11/08/afeck2kn_1920x1080-doctorstrange-carousel_1920_1080.jpg" 
                alt=""
                />
            <div className="info">
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/d9xlip3-9309d0f7-e6b7-4638-88ff-6781fba47cdd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZDl4bGlwMy05MzA5ZDBmNy1lNmI3LTQ2MzgtODhmZi02NzgxZmJhNDdjZGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V0T3Mpwtu6p3fL__cf7vcwQM7ujmidnvPqjU5xadl-Y" 
                    alt="" 
                />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad possimus molestiae quo reprehenderit tempore, voluptas aspernatur adipisci! Porro nihil, quis doloribus quod cupiditate, ducimus, perspiciatis unde sint recusandae eaque consectetur.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="moreInfomation">
                        <Info/>
                        <span>Info</span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Featured
