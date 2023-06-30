/* eslint-disable react/prop-types */
import "./cardCountriesSideBar.css"


function CardCountriesSideBar(props) {
  return (
    <>
    <div className="countryContainer">
        <img className="imgContainerCountries" src = {props.flag} />
        <h4 className={props.title}>{props.content1} </h4>
        <p className={props.number}>{props.content} </p>
    </div>
    </>
  )
}

export default CardCountriesSideBar