/* eslint-disable react/prop-types */

import "./cardSideBar.css"


function CardSideBar(props) {
  return (
    <div id="cardSideBarContainer" className={props.className}>
        <h4 id="titleCases" className={props.title}>{props.content1} </h4>
        <p id="numberToday" className={props.Today}>{props.numberToday}</p>
        <p id= "number" className={props.number}>{props.content} </p>
    </div>
  )
}

export default CardSideBar


