import React from "react";
// import web from "../images/img/231fdae7-bfa3-4559-bd29-f3f04570ef68-removebg-preview.png";
import { NavLink } from "react-router-dom";

const common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center pt-5">
        <div className="container-fluid ">
          <div className="row">
            <div className=" mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                   {props.name}
                    <strong className="brand-name"> Shree Shyam </strong>
                    Rajasthani Feast
                  </h1>
                  <h2 className="my-3">
                    Shree Shyam: Where Every Bite is an Expedition into
                    Rajasthan's Culinary Heritage
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                   
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluidi animated"
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default common;
