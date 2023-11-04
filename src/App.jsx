import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Service from "./components/Service";
// import {Routes,Route,Navigate} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import CardState from "./context/notes/CardState";








function App() {

  // const componentDidMount= async ()=> {
  //   const response = await fetch('/api/card');
  //   const body = await response.json();
  //   this.setState({ groups: body, isLoading: false });
  //   }
 
  return (
    <>
    <CardState>
      <Navbar/>
      <Routes >
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path='/' element = { }/> */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
        {/* <Route path="/" element={<Navigate replace to="/" />} /> */}
      </Routes>
      <Footer/>
      </CardState>
    </>
  );
}

export default App;
