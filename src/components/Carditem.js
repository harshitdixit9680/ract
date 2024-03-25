import React, { useContext } from "react";
import cardContest from "../context/notes/cardContest";
import { NavLink } from "react-router-dom";
import {loadStripe} from '@stripe/stripe-js';
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';


const Carditem = (props) => {
  const context = useContext(cardContest)
  const { card } = props;

  const host = "https://restaurant-backend-fam0.onrender.com"


 // payment integration

const makePayment = async () => {
  const stripe = await loadStripe('pk_test_51OxhPwSHqp6XtKOEepJRu18Ot3fWx5SNrj61OlzbSre0wwofuRYfzVdJisOgkkSeCXYxBoOwQ5bndzh6PdxwFS9M003S9Wy0UQ');

  const body = {
    products: Array.isArray(card) ? card : [card] // Ensure card is always sent as an array
  };

  const headers = {
    "Content-Type": "application/json",
          "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmN2VhZjE3MTViMzU2NjJhMWVjNGIxIn0sImlhdCI6MTY5Mzk2OTEzN30.tL-ImloXyoJp8YwUGdpz4EQAwvglJ4VWiWOLAStNFfk"

  };

  try {
    const response = await fetch(`${host}/api/checkout/create-checkout-session`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });

    if (result.error) {
      console.log(result.error);
    }
  } catch (error) {
    console.error("Error:", error);
  }
};




  return (

    <>

    <div className="col-md-4 col-12 mx-auto cali">
                <div className="card">
                  <img src={props.imgsrc} className="card-img-top wit" alt={props.imgsrc} />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{card.title}</h5>
                    <p className="card-text">
                  
                       {card.description}
                    </p>
                    <NavLink  onClick={makePayment}  className="btn btn-primary">
                      
                    ₹ {card.price}
                    </NavLink>
                  </div>
                </div>
              </div>




    
    </>
  );
};

export default Carditem;
