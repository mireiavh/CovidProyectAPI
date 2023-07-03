import "./Tracker1.css"
import SideBarTracker from "../../components/molecules/sideBarTracker/SideBarTracker"
import Dropdown from '../../components/molecules/dropdown/Dropdown';
import AppCardTracker1 from "../../components/molecules/SectionCardTracker1/AppCardTracker1"
import BlueMap from "../../assets/images/MapaAzul.png"
import NavbarSidebar from "../../components/atoms/navbarSidebar/NavbarSidebar"
import SummaryCards from "../../components/molecules/SummaryCards/SummaryCards";




function Tracker1() {


  return (
    <>
    <div className="trackerContainer">
      <NavbarSidebar />
      <div className ="sidebar-tracker">
        <SideBarTracker className ="sidebar-tracker"></SideBarTracker>
      </div>
      <div className="mainTracker">
        <Dropdown/>
      <div className ="dropdown">
        <AppCardTracker1/>
        <img id="imgMap" src={BlueMap} alt="" />
        <SummaryCards/>
      </div>
      </div>
    </div>
    </>
  )
}

export default Tracker1;