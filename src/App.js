import React from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import Rosters from "./components/Rosters";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <Header />
      <AboutSection />
      <Rosters />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
