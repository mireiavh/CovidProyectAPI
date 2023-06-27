/* eslint-disable react/prop-types */
import "./iconsFeatures.css"



function IconsFeatures(props) {
  return (
    <div className="iconsContainer">
        <img className="iconImg" src={props.image}/>
        <h2 className={props.number}>{props.content}</h2>
        <p className={props.text}>{props.contentP}</p>
    </div>
  )
}

export default IconsFeatures