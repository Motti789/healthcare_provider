import React from "react";
import Router from "./Router";
import Navbar from "../components/Navbar";


import 'bootstrap/dist/css/bootstrap.min.css';
import ClientsContainer from "../containers/ClientsContainer";
import NotesContainer from "../containers/NotesContainer";
import '../App.css';

import Footer from "./Footer";


const App = () => {
    return (
        <div>
        < Navbar />
        <br></br>
        <ClientsContainer />
        <NotesContainer />
        
        <Footer/>
        < Router />
        </div>
    );
};

export default App;