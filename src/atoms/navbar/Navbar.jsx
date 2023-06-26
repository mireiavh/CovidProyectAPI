import "./Navbar.css"
import Button from "../buttons/Bttn"
import Logo from "../../assets/Imgenes Comprimidas/logo.png"


function Navbar() {
    return (
      <div className='navbar'>
          <div className='imgNavbar'>
            <img src={Logo}/>
          </div>
          <div className='textNavbar'>
            <ul>
                <li><a>Home</a></li>
                <li><a>Prevention</a></li>
                <li><a>Qurantine</a></li>
                <li><a>Pages</a>
                </li>
                <li><a>About</a></li>
                <li><a>Help</a></li>
                <Button className="bttnTracker" content = {'Tracker'}></Button>
            </ul>
          </div>
  
  
      </div>
    )
  }
  
  export default Navbar
  
  // <img src={}/>

  //const yo: (valor: any) => any
  //console.log(yo)