import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Tracker1 from "../services/Tracker1"

const RouterItem = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<LandingPage/>}></Route>
                <Route path="/map" element= {<Tracker1/>}></Route>
                <Route path="/map" element= {<Tracker1/>}></Route>
            </Routes>
        </BrowserRouter>
    )
};
export default RouterItem;