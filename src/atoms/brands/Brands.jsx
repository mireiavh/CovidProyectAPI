import "./Brands.css"

import Time from "../../assets/Imgenes Comprimidas/b-2.png"
import Cean from "../../assets/Imgenes Comprimidas/b-3.png"
import Albero from "../../assets/Imgenes Comprimidas/b-4.png"
import Dora from "../../assets/Imgenes Comprimidas/b-5.png"
import GreenTurtle from "../../assets/Imgenes Comprimidas/b-6.png"


function Brands() {
    return (
        <div className='containerBrands'>
            <div className='time'>
              <img src={Time}/>
            </div>
            <div className='cean'>
              <img src={Cean}/>
            </div>
            <div className='albero'>
              <img src={Albero}/>
            </div>
            <div className='dora'>
              <img src={Dora}/>
            </div>
            <div className='greenTurtle'>
              <img src={GreenTurtle}/>
            </div>
            <div className='time'>
              <img src={Time}/>
            </div>
            
        </div>
    )
  }
  
  export default Brands