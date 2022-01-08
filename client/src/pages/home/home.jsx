import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import './home.scss'
import Navbar from '../../components/Navbar/Navbar'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'

const Home = ({type}) => {
    const [genre,setGenre] = useState("");
    const [lists,setLists]= useState([]);
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`list/get${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`);
                setLists(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getRandomLists();
    }, [type,genre])

    return (
        <div className="home">
            <Navbar />
            <Featured type={type}/>
            {
                lists.map((list) => 
                    (<List list={list}/>)
                )
            }
        </div>
    )
}
export default Home