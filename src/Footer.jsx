import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMap } from '@fortawesome/free-regular-svg-icons'
import { faPhone,faHeart} from '@fortawesome/free-solid-svg-icons'
import './ReactMenu/Footer.css'
const Footer = () => {
  return (
  <>
     <div className="row">
            <div className=" mx-auto">

            
  <footer className="ftco-footer ftco-bg-dark ftco-section">
        <div className="container-fluid px-md-5 px-3">
          <div className="row ">
            <div className="col-md-3 col-lg-3">
              <div className="ftco-footer-widget ">
                <a className="navbar-brand" href="https://amarpunjabifoods.com/">
                  <img src="https://amarpunjabifoods.com/assets/frontend/images/logo.png" alt='why'/></a>
                <p>Amar Punjabi serve you the best with the best to serve. From birthday parties, corporate seminars to weddings and related functions, we give you a range of food items to choose for your occasion.</p>
            
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="ftco-footer-widget ">
                <h2 className="ftco-heading-2">Contact Us</h2>
                <ul className="list-unstyled open-hours">
                  <li className="d-flex"><span>AMAR PUNJABI FOODS</span></li>
                  <li className="d-flex"><div className="icon mr-2 d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon icon={faMap} style={{color: "#ffffff",}}  />
                  </div><span> 4-A-18, Rangbari road,Keshavpura, circle, Sector - 4, Talwandi, Kota, Rajasthan 324009</span></li>
                  <li className="d-flex"><div className="icon mr-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} /></div><span>+91-8561922222</span></li>
         
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="ftco-footer-widget ">
                <h2 className="ftco-heading-2">Contact Us</h2>
                <ul className="list-unstyled open-hours">
                  <li className="d-flex"><span>AMAR PUNJABI DHABA</span></li>
                  <li className="d-flex"><div className="icon mr-2 d-flex justify-content-center align-items-center"> <FontAwesomeIcon icon={faMap} style={{color: "#ffffff",}} /></div><span>Station Main Rd, Near Kota Railway Station, Bhimganj Mandi, Kota, Rajasthan 324002</span></li>
                  <li className="d-flex"><div className="icon mr-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faPhone} style={{color: "#ffffff",}} /></div><span>+91-737460002</span></li>
                
                </ul>
              </div>
            </div>
            <div className="col-md-3 col-lg-3">
              <div className="ftco-footer-widget ">
       
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAmarpunjabifood&tabs=timeline&width=340&height=200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="220" 
                    title='how'
                    style={{ border:"none" , overflow:"hidden" ,scrolling :"no" ,frameborder : "0", allowTransparency :"true" ,   allow:"encrypted-media"}}></iframe>

                  </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">

                <p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | made with <FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} /> by <a href="https://srvitsolutions.com" >SRV IT Solutions</a>
                  
                </p>
              </div>
            </div>
          </div>
      </footer>
      <div className="callusftr apd"><a href="tel:7615810000"><i className="fa fa-phone"></i><span>APD : 7374060002</span></a></div>
      <div className="callusftr apf"><a href="tel:7615810000"><i className="fa fa-phone"></i><span>APF : 8561922222</span></a></div>
  
      </div>
      </div>
  </>
  )
}

export default Footer


