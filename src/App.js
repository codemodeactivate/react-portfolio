import React, { useState } from 'react';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Resume from "./components/Resume";
import Work from "./components/Work";
import Footer from "./components/Footer";

const App = () => {



  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Work />
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
