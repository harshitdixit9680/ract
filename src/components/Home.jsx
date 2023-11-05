import React from "react";
import web from '../images/img/231fdae7-bfa3-4559-bd29-f3f04570ef68-removebg-preview.png'
// import { NavLink } from "react-router-dom";
import Common from "./Common";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
    <Common
     name=" Where Tradition Meets Taste:"
     imgsrc={web}
     visit="/service"
     btname="Get Started"/>
     <Footer/>
    </>
  );
};

export default Home;
