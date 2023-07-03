/* eslint-disable react/jsx-key */
import "./top10.css"
import CardCountriesSideBar from "../../atoms/cardCountriesSideBar/CardCountriesSideBar"
import Top10Service from "../../../configuration/Top10Service"


function Top10() {
  const data = Top10Service().sort((a, b) => b.cases - a.cases);

  console.log(data);
  
  return (
    <>
    <div className="">
    
        <h2 className="countryTitle">Top 10 Country</h2>
        {data.slice(0, 10).map((country) =>(
        <CardCountriesSideBar className="" flag={country.countryInfo.flag} content1={country.country} content={country.cases} />
        
        )
        )}
    </div>
    
 
  </>
)
}

export default Top10