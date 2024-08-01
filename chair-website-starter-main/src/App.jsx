import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Companies from "./components/companies/Companies";
import Chair from "./components/Chair/Chair";
import About from "./components/About/About";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Companies/>
      <Chair/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
