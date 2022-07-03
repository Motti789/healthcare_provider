import React from "react";
import Router from "./Router";
import Navbar from "../components/Navbar";


import 'bootstrap/dist/css/bootstrap.min.css';
import ClientsContainer from "../containers/ClientsContainer";


import '../App.css';

import Footer from "./Footer";


const App = () => {
    return (
        <div>
        <Navbar/>
        <ClientsContainer />
        <Footer/>
        <Router/>
        </div>
    );
};

export default App;