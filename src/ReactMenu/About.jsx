import React from "react";
// import Common from "./Common";
import web from "../images/245365353_105301948605724_3540914780267730231_n (1).jpg";
import Aboutt from "./Aboutt";

const About = () => {
  return (
    <>
      <Aboutt
        name="Welcome To "
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />


    </>
  );
};

export default About;
