import Sdata from "./Sdata";
import React, { useContext, useEffect,  useState } from "react";
import Card from "./Card";
import Carditem from './Carditem';

import cardContest from "../context/notes/cardContest";
import Footer from "../Footer";
const Service = (props) => {


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
    // eslint-disable-next-line
  }, []);




  return (
    <>
      <div className="my-5">
        <h1 className="text-center" style={{marginBottom:"5rem"}}>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row1" >
          <div className=" mx-auto">
            <div className="row1 gy-5">
             {
              Sdata.map((card,ind)=>{
                return <Card key={ind}   card={card}
                showAlert={props.showAlert} />
              })
             }

         
{cards.map((card,_id) => {
          return (
            <Carditem
              key={card._id}
              // // updateCard={updateCard}
              card={card}
              showAlert={props.showAlert}
            />
          );
   
   
        })}
            </div>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default Service;
