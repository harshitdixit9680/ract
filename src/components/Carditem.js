import React, { useContext } from "react";
import cardContest from "../context/notes/cardContest";
import { NavLink } from "react-router-dom";


const Carditem = (props) => {
  const context = useContext(cardContest)
  const { card } = props;
  return (

    <>
    {/* <div className="col-md-3">
      <div  className="card my-3"> 
        <div  className="card-body">
          <div className="d-flex align-items-center">
            <h5  className="card-title"> {card.title}</h5>
          </div>
          <p  className="card-text"> {card.description}</p>
        </div>
      </div>
    </div>

 */}



    <div className="col-md-4 col-12 mx-auto cali">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top wit" alt={props.imgsrc} />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{card.title}</h5>
                    <p className="card-text">
                  
                       {card.description}
                    </p>
                    <NavLink to="/" className="btn btn-primary">
                      Go somewhere
                    </NavLink>
                  </div>
                </div>
              </div>




    
    </>
  );
};

export default Carditem;
