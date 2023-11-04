import React, { useContext, useEffect, useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import Carditem from './Carditem';

import cardContest from "../context/notes/cardContest";

const Card = (props) => {

  const context = useContext(cardContest);

  const { cards, getCards } = context;

  const [card] = useState({
    id: "",
    etitle: "",
    edescription: "",
    eprice: "",
  });

  useEffect(() => {
    getCards();

  }, []);

  return (
    <>
   
     <div className="col-md-4 col-12 mx-auto cali">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top wit" alt={props.imgsrc} />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">
                 {props.description}
                   
                    </p>
                    <NavLink to="/" className="btn btn-primary">
                   {props.price}
                    </NavLink>
                  </div>
                </div>
              </div>
              
         



    </>

    
  )
}

export default Card



