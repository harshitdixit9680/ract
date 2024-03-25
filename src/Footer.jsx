import React from 'react'
import logo from "../src/images/img/Shree_Shyam-removebg-preview.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-regular-svg-icons'
import { faPhone, faHeart } from '@fortawesome/free-solid-svg-icons'
import './components/Footer.css'
import facebook from "../src/images/img/Web capture_8-11-2023_18918_www.facebook.com.jpeg";
const Footer = () => {
  return (
    <>
      <div className="row1">
        <div className=" mx-auto">


          <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container-fluid px-md-5 px-3">
              <div className="row1 ">
                <div className="col-md-3 col-lg-3">
                  <div className="ftco-footer-widget ">
                    <a className="navbar-brand" href="https://harshitdixit9680.github.io/ract/">
                      <img src={logo} alt='why' /></a>
                    

                  </div>
                </div>
                <div className="col-md-3 col-lg-3">
                  <div className="ftco-footer-widget ">
                    <h2 className="ftco-heading-2">Contact Us</h2>
                    <ul className="list-unstyled open-hours">
                      <li className="d-flex"><span>SHREE SHYAM FOODS AND JUICE CENTER</span></li>
                      <li className="d-flex"><div className="icon mr-2 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faMap} style={{ color: "#ffffff", }} />
                      </div><span> Dosa Mega Highway, Kota, Kota Dosa Highway, Indergarh, Bundi, Rajasthan 323613</span></li>
                      <li className="d-flex"><div className="icon mr-2 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faPhone} style={{ color: "#ffffff", }} /></div><span>+91-99999999999 </span></li>

                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3 tooo">
                  <div className="ftco-footer-widget ">
                    <h2 className="ftco-heading-2">
                      Shree Shyam Restaurant Special
                    </h2>
                    <ul className="list-unstyled open-hours">
                    <p>Shree Shyam Restaurant serve you the best with the best to serve. From birthday parties Hall, corporate seminars to weddings and related functions, we give you a range of food items to choose for your occasion.</p>

                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3">
                  <div className="ftco-footer-widget ">

                    <iframe src={facebook} width="100%" height="220"
                      title='how'
                      style={{ border: "none", overflow: "hidden", scrolling: "no", frameborder: "0", allowTransparency: "true", allow: "encrypted-media" }}></iframe>
{/* 
                    <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fshreeshyamrestaurant1&tabs=timeline&width=340&height=200&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="220"
                      title='how'
                      style={{ border: "none", overflow: "hidden", scrolling: "no", frameborder: "0", allowTransparency: "true", allow: "encrypted-media" }}></iframe> */}

                  </div>
                </div>
              </div>
              <div className="row1">
                <div className="col-md-12 text-center">

                  <p>
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | made with <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff", }} /> by <a href="https://harshit-dixit-portfolio.netlify.app/" >Harshit Dixit</a>

                  </p>
                </div>
              </div>
            </div>
          </footer>
          <div className="callusftr apd"><a href="tel:7615810000"><i className="fa fa-phone"></i><span>APD : 9999999999</span></a></div>
          <div className="callusftr apf"><a href="tel:7615810000"><i className="fa fa-phone"></i><span>APF : 9999999999</span></a></div>

        </div>
      </div>
    </>
  )
}

export default Footer


