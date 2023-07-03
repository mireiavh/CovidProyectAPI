import "./Tracker1.css"
import SideBarTracker from "../../components/molecules/sideBarTracker/SideBarTracker"
import Dropdown from '../../components/molecules/dropdown/Dropdown';
import AppCardTracker1 from "../../components/molecules/SectionCardTracker1/AppCardTracker1"
import BlueMap from "../../assets/images/MapaAzul.png"




function Tracker1() {


  return (
    <>
    <div className="trackerContainer">
      <div className ="sidebar-tracker">
        <SideBarTracker className ="sidebar-tracker"></SideBarTracker>
      </div>
      <div className ="dropdown">
        <Dropdown/>
        <AppCardTracker1/>
      </div>
      <div className="imgMap">
      <img src={BlueMap} alt="" />
      </div>
    </div>
    
    </>
  )
}

export default Tracker1;