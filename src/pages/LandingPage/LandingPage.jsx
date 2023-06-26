

import Banner from "../../molecules/Banner/Banner"
import AppFeaturesSection from "../../molecules/appFeaturesSection/AppFeaturesSection"
import Faqs from "../../molecules/faqs/Faqs"
import Newscovid from "../../molecules/news/Newscovid"
import Footer from "../../molecules/footer/Footer"


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