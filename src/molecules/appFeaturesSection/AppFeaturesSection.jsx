import "./AppFeaturesSection.css"

import CardsFeatures from "../../atoms/cardsFeatures/CardsFeatures"
import IconsFeatures from "../../atoms/iconsFeatures/IconsFeatures"
import ImgMobFeatures from "../../assets/images/mobiles.png"
import lockImg from "../../assets/icons/candado.svg"
import upImg from "../../assets/icons/subir-50.png"
import crownImg from "../../assets/icons/crown-50.png"
import heartImg from "../../assets/icons/corazones-50.png"  
import mixImg from "../../assets/icons/mesa-de-mezclas-50.png"
import boxImg from "../../assets/icons/parcela-grande-50.png"



function AppFeaturesSection() {
  return (
    <>
    <div className="title">
        <h3 className="titleApp">App Feature</h3>
        <h2 className="titleFeatures">Basic Feature You Will Get When You Use</h2>
    </div>

    <div className="cardsContainer">
      <div className="cardItem">
      <CardsFeatures  image={lockImg} content1={"Fever"} content={"Fever is a key symptom,experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100"}/>
      </div>
      <div className="cardItem1">
      <CardsFeatures image={mixImg} content1={"Cough"} content={"Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."}/>
      </div>
      <div className="cardItem2">
      <CardsFeatures image={boxImg} content1={"Difficulty Breathing"} content={"Shortness of breathe can be a third -- and very serius -- manifestation of COvid-19, and it can occur on its own, without a cough."}/>
      </div>
      <div className="cardItem3">
      <CardsFeatures image={lockImg} content1={"Fever"} content={"Fever is a key symptom,experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100"}/>
      </div>
      <div className="cardItem4">
      <CardsFeatures image={mixImg} content1={"Cough"} content={"Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."}/>
      </div>
      <div className="cardItem5">
      <CardsFeatures image={boxImg} content1={"Difficulty Breathing"} content={"Shortness of breathe can be a third -- and very serius -- manifestation of COvid-19, and it can occur on its own, without a cough."}/>
      </div>
    </div>
      <div className="ftrParagraph">
        <img className="imgFtr" src={ImgMobFeatures} alt="" />
      <div>
        <h2 className="stayHome">Stay Home, And Prayer For Victim</h2> 
        <p className="textHuman">Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.
        Shortness of breath can be a third -- and very serious -- manifestation of Covid-19, and it can occur on its own, without a cough.</p>
        
      </div>
    </div>

   <div className="icons">
      <IconsFeatures image={lockImg} content="403" contentP="STARTUPS"/>
      <IconsFeatures image= {upImg} content={"120+"} contentP={"MEMBER"} />
      <IconsFeatures image= {crownImg} content={"22M"} contentP={"REVENUE"} />
      <IconsFeatures image= {heartImg} content={"5643"} contentP={"DOWNLOAD"} />
       
    </div>

    </>
  )
}

export default AppFeaturesSection