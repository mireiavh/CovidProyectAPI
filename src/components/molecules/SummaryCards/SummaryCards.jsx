import "./summaryCard.css"
import CardTracker1 from "../../atoms/CardTracker1/CardTracker1"
import covidDefault from "../../../assets/icons/covid-defult.svg"
import covidRed from "../../../assets/icons/covid-red.svg"
import covidGreen from "../../../assets/icons/covid-green.svg"
import covidOrange from "../../../assets/icons/covid-orange.svg"
import imgTelephone from "../../../assets/icons/telephone.svg"
import useFetch from "../../../hooks/useFetch"
import DynamicUrl from "../../../services/DynamicUrl"


function SummaryCards() {
    const data = useFetch(`${DynamicUrl}/all`);
    return ( 
        <>
            <section className="cardSummaryContainer">   
                <div className="summaryWrap">             
                    <div className="CardT1">
                        <CardTracker1  image={covidDefault} contentTitle={"Total Confirmed"} text= "default" contentNumber={data.cases}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidGreen} contentTitle={"Total Recovered"}  text= "red" contentNumber={data.recovered}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidOrange} contentTitle={"Total Deaths"}  text= "green" contentNumber={data.deaths}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidRed} contentTitle={"New Deaths"}  text= "blue" contentNumber={data.todayDeaths}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={imgTelephone} contentTitle={"Help Line"}  text= "black" contentNumber="198"/>
                    </div>
                   
                </div>    
            </section>  

        </>      
    )
}
export default SummaryCards