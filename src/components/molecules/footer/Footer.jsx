import "./footer.css"
import Logo from '../../../assets/images/logo-white.png'
import Facebook from '../../../assets/icons/facebook.png'
import Twitter from '../../../assets/icons/twitter.png'
import Linkedin from '../../../assets/icons/linkedin.png'
import YouTube from '../../../assets/icons/youtube.png'
import Componentsfooter from '../../../components/atoms/componentsFooter/Componentsfooter'


function Footer() {
  return (
    <div className="footer">
        <div className="footerContainer">  
            <div className="infoFooter">
                <div className="infoText">
                    <img src={Logo} alt="logo"/>
                    <p>These droplets can land on objects and surfaces around the person such as tables, doorknobs and handrails.</p>
                </div>
                <div className="infoMedia">
                        <img src={Facebook} alt="Facebook"/>
                        <img src={Twitter} alt="Twitter"/>
                        <img src={Linkedin} alt="Linkedin"/>
                        <img src={YouTube} alt="YouTube"/>
                </div>                    
            </div>
            <div className="infoColumn">
                <div id="column"><Componentsfooter text="Quick Links" textList1="Prevention" textList2="Quarentine" textList3="About" textList4="Help"/></div>
                <div id="column"><Componentsfooter text="About" textList1="Hand Wash" textList2="Social Distance" textList3="Isolate" textList4="Difference"/></div>
                <div id="column"><Componentsfooter text="About" textList1="Hand Wash" textList2="Social Distance" textList3="Isolate" textList4="Difference"/></div>
                <div id="column"><Componentsfooter text="Help" textList1="Hand Wash" textList2="Social Distance" textList3="Isolate" textList4="Difference"/></div>
            </div>
        </div>
        <div className="br"></div>  
        <div className="footerRight">
            <div className="copyRight"> 
                <p>@Copyright 2020. All Rights Reserved</p> 
            </div>
            <div className="developedBy"> 
                <p>Design by <span>DexignZone</span></p>
            </div>
        </div>
    </div>
  )
}
export default Footer
