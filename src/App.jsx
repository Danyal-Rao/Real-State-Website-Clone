import { useState } from "react";
import "./App.css";
import Header from "./componants/Header/Header";
import Hero from "./componants/hero/Hero";
import Companies from "./componants/Companies/Companies";
import Residencies from "./componants/Residencies/Residencies";
import Values from "./componants/values/Values";
import Contact from "./componants/Contact/Contact";
import GetStarted from "./componants/GetStarted/GetStarted";
import Footer from "./componants/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <div>
        <div className="white-gradient"/>
      <Header />  
      <Hero />
      </div>
       <Companies/>
       <Residencies/>
       <Values/>
       <Contact/>
       <GetStarted/>
       <Footer/>
    </div>
  );
}

export default App;
