import React, { Fragment } from "react";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import HeroArea from "../../components/HeroArea/HeroArea";
import Navbar from "../../components/Navbar/Navbar";
import Services from "../../components/Services/Services";
import Update from "../../components/Update/Update";

const Home = () => {
  return (
    <div name="home">
      <Navbar />
      <HeroArea />
      <Features />
      <Update />
      <Services />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Home;
