import "./Navbar.css"
import Bttn from "../buttons/bttn"
import Logo from "../../assets/images/logo.png"


function Navbar() {
    return (
      <div className='navbar'>
          <div className='imgNavbar'>
            <img src={Logo}/>
          </div>4
          <div className='textNavbar'>
            <ul>
                <li><a>Home</a></li>
                <li><a>Prevention</a></li>
                <li><a>Qurantine</a></li>
                <li><a>Pages</a>
                </li>
                <li><a>About</a></li>
                <li><a>Help</a></li>
                <Bttn></Bttn>
            </ul>
          </div>
  
  
      </div>
    )
  }
  
  export default Navbar
  
  // <img src={}/>

  //const yo: (valor: any) => any
  //console.log(yo)