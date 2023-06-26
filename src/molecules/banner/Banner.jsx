import "./Banner.css"

import Button from "../../atoms/buttons/Bttn"
import Navbar from "../../atoms/navbar/Navbar"
import Brands from "../../atoms/brands/Brands"

import ImgBanner from "../../assets/ImgenesComprimidas/phones.png"

function Banner() {
  return (
    <>
    <Navbar />
    <div className='container'>
        <div className='textContainer'>
            <h1>Download the covid app to get latest update</h1>
            <p>Human coronaviruses are common and are typically associated with
            mild illnesses, similar to the common cold. The corona virus
            COVID-19 is affecting 210 countries & territories around the
            worls and 2 international conveyances.</p>
            <Button className="bttnBanner" content = {'How to protect'}></Button>
        </div>
        <div className='imgContainer'>
          <img src={ImgBanner}/>
        </div>
    </div>
    <Brands />
    </>
  )
}

export default Banner