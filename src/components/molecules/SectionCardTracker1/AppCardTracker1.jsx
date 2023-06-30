import "./AppCardTracker1.css"
import CardTracker1 from "../../atoms/CardTracker1/CardTracker1"
import covidDefault from "../../../assets/icons/covid-defult.svg"
import covidRed from "../../../assets/icons/covid-red.svg"
import covidGreen from "../../../assets/icons/covid-green.svg"
import covidBlue from "../../../assets/icons/covid-blue.svg"
import covidOrange from"../../../assets/icons/covid-orange.svg"
import covidRedDark from "../../../assets/icons/covid-redark.svg"



function AppCardTracker1() {
    return ( 
        <>
            <section className="cardT1Container">   
                <div className="wrap">             
                    <div className="CardT1">
                        <CardTracker1  image={covidDefault} contentTitle={"Total Cases"} text= "default" contentNumber={"1654647"}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidRed} contentTitle={"Total Deaths"}  text= "red" contentNumber={"#"}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidGreen} contentTitle={"Total Recovered"}  text= "green" contentNumber={"#"}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidBlue} contentTitle={"Total Active"}  text= "blue" contentNumber={"#"}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidOrange} contentTitle={"New Cases"}  text= "orange" contentNumber={"#"}/>
                    </div>
                    <div className="CardT1">
                        <CardTracker1  image={covidRedDark} contentTitle={"New Deaths"}  text= "redDark" contentNumber={"#"}/>
                    </div>
                </div>    
            </section>  

        </>      
    )
}
export default AppCardTracker1