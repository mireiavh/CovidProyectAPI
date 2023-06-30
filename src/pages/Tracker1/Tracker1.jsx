import "./Tracker1.css"
import SideBarTracker from "../../components/molecules/sideBarTracker/SideBarTracker"
import {useState, useEffect} from 'react'
import Dropdown from '../../components/molecules/dropdown/Dropdown.jsx';
import getData from "../../configuration/Dropdownservices.jsx"



function Tracker1() {

  const url = "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1";
  const [data, setData] = useState([]);

  const populateData = async() =>
  {
    let response = await getData(url);
    setData(response);
  }

  useEffect(() =>
  {
    populateData();
  }, []);


  return (
    <>
    <div>
        <SideBarTracker></SideBarTracker>
        <Dropdown data={data}></Dropdown>
    </div>
    
    </>
  )
}

export default Tracker1;