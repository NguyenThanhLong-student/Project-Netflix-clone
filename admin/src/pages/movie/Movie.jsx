import './Movie.scss'
import { Link, useLocation } from "react-router-dom";

const Movie = () => {
    const location = useLocation();
    const movie = location.state.movie;
    return (
        <div className="movie">
            <div className="movieTop">
                <h2>Movie</h2>
                <Link to="/movie/new" className="link">
                    <div className="Create">New movie</div>
                </Link>
            </div>
            <div className="movieInfo">
                <div className="movieName">
                    <img
                        src={
                            movie.image || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                        }
                        alt=""
                        className="widgetSmImg"
                    />
                    <span>{movie.title}</span>
                </div>
                <span><b>id: </b> {movie._id}</span>
                <span><b>genre: </b> {movie.genre}</span>
                <span><b>limit: </b> {movie.limit}</span>
                <span><b>year: </b> {movie.year}</span>
            </div>
            <div className="movieUpdateForm">
                <form action="" className="updateForm">
                    <label>Movie Title</label>
                    <input type="text" placeholder={movie.title} />
                    <label>Movie Description</label>
                    <input type="text" placeholder={movie.desc} />
                    <label>Movie Image</label>
                    <input type="text" placeholder={movie.image} />
                    <label>Movie Image Tilte</label>
                    <input type="text" placeholder={movie.imageTilte} />
                    <label>Movie Image Small</label>
                    <input type="text" placeholder={movie.imageSmall} />
                    <label>Movie Trailer</label>
                    <input type="text" placeholder={movie.trailer} />
                    <label>Movie Video</label>
                    <input type="text" placeholder={movie.video} />
                    <label>Movie Year</label>
                    <input type="text" placeholder={movie.year} />
                    <label>Movie Limit</label>
                    <input type="text" placeholder={movie.limit} />
                    <label>Movie Genre</label>
                    <input type="text" placeholder={movie.genre} />
                    <label>isSeries</label>
                    <select className="isSeries">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button type="submit" className="updateButton">Update</button>
                </form>
                <div className="bigImage">
                    <img
                        src={
                            movie.image || "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
                        }
                        alt=""
                        className="widgetSmImg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Movie
