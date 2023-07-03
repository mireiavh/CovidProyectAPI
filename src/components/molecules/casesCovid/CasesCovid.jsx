/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./casesCovid.css"
import CardSideBar from "../../atoms/cardSideBar/CardSideBar"
import useFetch from "../../../hooks/useFetch"
import DynamicUrl from "../../../services/DynamicUrl"


function CasesCovid() {
 const data = useFetch(`${DynamicUrl}/all`);
  
  return (
    
    <>
    <div className='colorBoxesSectionContainer'>
        <h2 className="casesTitle">COVID-19 Tracker</h2>
        <CardSideBar className="card1 cardsContainer" content1="Total Cases" numberToday={`+${data.todayCases}`} content={data.cases}/>
        <CardSideBar className="card2 cardsContainer" content1="Active Cases"  content={data.active}/>
        <CardSideBar className="card3 cardsContainer" content1="Recoverd Cases" numberToday={`+${data.todayRecovered}`} content={data.recovered}/>
        <CardSideBar className="card4 cardsContainer" content1="Deaths Cases" numberToday={`+${data.todayDeaths}`} content={data.deaths}/>
        
    </div>
    
    </>
  )
  }

export default CasesCovid

