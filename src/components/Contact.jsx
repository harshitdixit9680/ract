import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Qr_Code from "../images/img/chart-removebg-preview.png";
const Contact = (props) => {

  const [data, setData] = useState({
    fullname : '',
    phone : '',
    email : '',
    msg : '',
  })

const InputEvent=(event)=>{

 const { name ,value} = event.target;
setData((preVal)=>{
return {
  ...preVal,
  [name] : value
}
})
}  
const formSubmit = (e)=>{
 e.preventDefault();
 alert(`${data.fullname}`)
}


  return (
    <>
        <section id="header" className="d-flex align-items-center pt-5">
        <div className="container-fluid ">
        <div className="row">
          <div class="heading-section mb-3 text-center  ">
							<span class="subheading ">Contact US</span>
							<h3 class="mb-4 WOO">Home Delivery Service </h3>
						</div>
            <div className=" mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                   
                  <h1>
                   {props.name}
                    <strong className="brand-name">Home Delivery Services Available For Location : </strong>
                   JAIPUR,KOTA BUNDI,BARAN 
                  </h1>
                  <h2 className="my-3">
                  Please Read This Instruction
                    </h2>
                    <p >Go to the service page, select dish, qr, then call, get the order written, scan the qr, make payment and wait for the order to arrive.</p>
                    <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                   +91 9680629249
                    </NavLink>
                  </div>
                </div>
                

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  
                  <img
                    src={Qr_Code}
                    className="img-fluidis "
                    alt="homeimg"
                  />
                </div>
              </div>
            </div>




            
						</div>
        </div>
        </section>














      <div className="my-5">
        <h1 className="text-center">
          Contatct Us For Any Query
        </h1>
      </div>

      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto" >
            <form  onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange ={InputEvent} placeholder="Enter Your Name" required />

              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange ={InputEvent} placeholder="Mobile Number" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange ={InputEvent} placeholder="name@example.com" required/>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"   name='msg' value={data.msg} onChange ={InputEvent}></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary " type="submit">Submit form</button>
              </div> 
            </form>
          </div>
        </div>

      </div>

    </>
  )
}

export default Contact