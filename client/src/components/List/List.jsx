import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import ListItem from '../ListItem/ListItem'
import { useRef, useState } from 'react'
import './List.scss'

const List = () => {
    const [slideNumber, setSlideNumber] = useState(0)
    const [leftDisplay, setLeftDisplay] = useState(false);
    const [rightDisplay, setRightDisplay] = useState(true);
    const listRef = useRef();
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setRightDisplay(true);
            setSlideNumber(slideNumber - 1)
            listRef.current.style.transform = `translateX(${distance + 230}px)`
            if(slideNumber===1) {
                setLeftDisplay(false);
            }
        }
        if (direction === "right" && slideNumber < 2) {
            setLeftDisplay(true)
            setSlideNumber(slideNumber + 1)
            listRef.current.style.transform = `translateX(${distance - 230}px)`
            if(slideNumber===1) {
                setRightDisplay(false);
            }
        }
       
    }
    return (
        <div className="list">
            <span className="listTitle">Coutinue to watch</span>
            <div className="wrapper">
                <ArrowLeft className="left sliderArrow" onClick={() => handleClick("left")} style={{display: !leftDisplay && "none"}} />
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                </div>
                <ArrowRight className="right sliderArrow" onClick={() => handleClick("right")} style={{display: !rightDisplay && "none"}} />
            </div>
        </div>
    )
}

export default List
