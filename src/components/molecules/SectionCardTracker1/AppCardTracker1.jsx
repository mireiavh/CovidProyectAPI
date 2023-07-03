import "./AppCardTracker1.css"
import CardTracker1 from "../../atoms/CardTracker1/CardTracker1"
import covidDefault from "../../../assets/icons/covid-defult.svg"
import covidRed from "../../../assets/icons/covid-red.svg"
//import covidGreen from "../../../assets/icons/covid-green.svg"
//import covidBlue from "../../../assets/icons/covid-blue.svg"
//import covidOrange from"../../../assets/icons/covid-orange.svg"
//import covidRedDark from "../../../assets/icons/covid-redark.svg"
import useFetch from "../../../hooks/useFetch"
import DynamicUrl from "../../../services/DynamicUrl"



function AppCardTracker1() {
    const data = useFetch(`${DynamicUrl}/countries`);
    return ( 
        <>
            <section className="cardT1Container">   
                <div className="wrap">             
                    <div className="CardT1">
                        <CardTracker1  image={covidDefault} contentTitle={"Total Cases"} text= "default" contentNumber={data.cases}/>
                    </div>
                    { <div className="CardT1">
                        <CardTracker1  image={covidRed} contentTitle={"Total Deaths"}  text= "red" contentNumber={data.deaths}/>
                    </div>
                    /*<div className="CardT1">
                        <CardTracker1  image={covidGreen} contentTitle={"Total Recovered"}  text= "green" contentNumber={data.recovered}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidBlue} contentTitle={"Total Active"}  text= "blue" contentNumber={data.active}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidOrange} contentTitle={"New Cases"}  text= "orange" contentNumber={data.todayCases}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidRedDark} contentTitle={"New Deaths"}  text= "redDark" contentNumber={data.todayDeaths}/>
                    </div> */}
                </div>    
            </section>  

        </>      
    )
}
export default AppCardTracker1