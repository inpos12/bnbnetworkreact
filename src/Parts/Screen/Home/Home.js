/* eslint-disable */
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Navbar from "../Common/Navbar/Navbar.js";
import Top from "./Top.js";
import Slide from "./Slide.js";
import Section1 from "./Section1.js";
import Section2 from "./Section2.js";
import Section3 from "./Section3.js";
import Footer from "../Common/Footer/Footer.js";

function Home() {
  return (
    <>
      <Navbar />
      <Slide />
      <Top />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </>
  );
}

export default Home;
