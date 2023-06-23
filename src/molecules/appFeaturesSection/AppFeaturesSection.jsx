import "./AppFeaturesSection.css"

import CardsFeatures from "../../atoms/cardsFeatures/CardsFeatures"
import IconsFeatures from "../../atoms/iconsFeatures/IconsFeatures"
import ImgMobFeatures from "../../assets/Imgenes Comprimidas/mobiles.png"
import lockImg from "../../assets/Iconos comprimidos/candado.svg"

import upImg from "../../assets/Iconos comprimidos/subir-50.png"
import crownImg from "../../assets/Iconos comprimidos/crown-50.png"
import heartImg from "../../assets/Iconos comprimidos/corazones-50.png"
import mixImg from "../../assets/Iconos comprimidos/mesa-de-mezclas-50.png"
import boxImg from "../../assets/Iconos comprimidos/parcela-grande-50.png"



function AppFeaturesSection() {
  return (
    <>
    <div className="title">
        <h3>App Feature</h3>
        <h2>Basic Feature You Will Get When You Use</h2>
    </div>

    <div className="cardsContainer">
      <div className="cardItem">
      <CardsFeatures  image={lockImg} content1={"Fever"} content={"Fever is a key symptom,experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100"}/>
      </div>
      <div>
      <CardsFeatures image={mixImg} content1={"Cough"} content={"Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."}/>
      </div>
      <CardsFeatures image={boxImg} content1={"Difficulty Breathing"} content={"Shortness of breathe can be a third -- and very serius -- manifestation of COvid-19, and it can occur on its own, without a cough."}/>
      <CardsFeatures image={lockImg} content1={"Fever"} content={"Fever is a key symptom,experts say. Don't fixate on a number, but know it's really not a fever until your temperature reaches at least 100"}/>
      <CardsFeatures image={mixImg} content1={"Cough"} content={"Coughing is another key symptom, but it's not just any cough, said Schaffner. It should be a dry cough that you feel in your chest."}/>
      <CardsFeatures image={boxImg} content1={"Difficulty Breathing"} content={"Shortness of breathe can be a third -- and very serius -- manifestation of COvid-19, and it can occur on its own, without a cough."}/>
    </div>
      <div className="ftrParagraph">
        <img className="imgFtr" src={ImgMobFeatures} alt="" />
      <div>
        <h2>Stay Home, And Prayer For Victim</h2> 
        <p>Human coronaviruses are common and are typically associated with mild illnesses, similar to the common cold.
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