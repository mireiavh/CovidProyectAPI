
import "./landing.css"
import Banner from "../../components/molecules/banner/Banner"
import AppFeaturesSection from "../../components/molecules/appFeaturesSection/AppFeaturesSection"
import Faqs from "../../components/molecules/faqs/Faqs"
import Newscovid from "../../components/molecules/news/Newscovid"
import Footer from "../../components/molecules/footer/Footer"


function LandingPage() {
  return (
    <>
    <Banner></Banner>
    <AppFeaturesSection></AppFeaturesSection>
    <Faqs></Faqs>
    <Newscovid></Newscovid>
    <Footer></Footer>
    </>
  )
}

export default LandingPage