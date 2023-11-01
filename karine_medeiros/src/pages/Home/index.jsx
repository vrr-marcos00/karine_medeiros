/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./styles.css";

/**
 * Components
 */
import Navbar from "../../Components/Navbar";
import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";


function Home({ socket }) {
  return (
    <>
      <Navbar />

      <HomeComponent />

      <AboutComponent />

      <ContactComponent />
    </>
  );
}

export default Home;