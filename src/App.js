import React, { useState } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    document.title = "Jeff Zenko | Full Stack Developer";
    }, []);


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <About />
//       <Skills />
//       <Work />
//     </div>
//   );


export default App;
