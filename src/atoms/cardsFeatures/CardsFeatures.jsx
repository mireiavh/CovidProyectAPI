/* eslint-disable react/prop-types */
import "./cardsFeatures.css"



function CardsFeatures(props) {
  return (
    <div className="cardContainer">
        <img 
        className="imgContainer" src = {props.image}/>
        <h3 className={props.title}>{props.content1}</h3>
        <p className={props.text}>{props.content}</p>
    </div>
  )
}

export default CardsFeatures