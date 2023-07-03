/* eslint-disable react/prop-types */
import "./CardTracker1.css"


function CardTracker1(props) {
  return (
    <section className="cardContainerTracker">
      <div className="cardText">
        <h3 className={props.title}>{props.contentTitle}</h3>
        <hr />
        <p className={props.text}>{props.contentNumber}</p>
      </div>
        <img className="imgT1Container" src = {props.image}/>
    </section>
  )
}

export default CardTracker1