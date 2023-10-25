import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./ReactMenu/Navbar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import About from "./ReactMenu/About";
import Contact from "./ReactMenu/Contact";
import Home from "./ReactMenu/Home";
import Service from "./ReactMenu/Service";
// import {Routes,Route,Navigate} from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";








function App() {
  return (
    <>
      <Navbar />
      <Routes >
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path='/' element = { }/> */}
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/service" element={<Service />} />
        {/* <Route path="/" element={<Navigate replace to="/" />} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
