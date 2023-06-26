import './App.css'
import RouterItem from './configuration/router'
import Faqs from './molecules/faqs/Faqs';
import Newscovid from './molecules/news/Newscovid'



function App() {
  return (
    <>
      <RouterItem></RouterItem>
      <Newscovid></Newscovid>
      <Faqs></Faqs>
    </>
  );
}

export default App;
