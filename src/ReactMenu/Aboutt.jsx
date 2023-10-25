import React from 'react'
import { NavLink } from "react-router-dom";
import './About.css'

const Aboutt = (props) => {
  return (
  <>
        <section id="header" className="d-flex align-items-center pt-5">
        <div className="container-fluid ">
            
          <div className="row">
          <div class="heading-section mb-3 text-center  ">
							<span class="subheading ">About</span>
							<h3 class="mb-4 WOO">Shree Shyam Restaurant </h3>
						</div>
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
                    <p >lways strive to serve the quality in food and behavior. APG rigorously works in getting a benchmark to meet the best quality standard cuisines & services to our lovable and respectable guest</p>
                 
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
  )
}

export default Aboutt