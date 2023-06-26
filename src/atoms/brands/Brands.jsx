import "./Brands.css"

import Time from "../../assets/ImgenesComprimidas/b-2.png"
import Cean from "../../assets/ImgenesComprimidas/b-3.png"
import Albero from "../../assets/ImgenesComprimidas/b-4.png"
import Dora from "../../assets/ImgenesComprimidas/b-5.png"
import GreenTurtle from "../../assets/ImgenesComprimidas/b-6.png"


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