import React from "react";
import Router from "./Router";


import 'bootstrap/dist/css/bootstrap.min.css';
import ClientsContainer from "./ClientsContainer";
import NotesContainer from "./NotesContainer";
import '../App.css';

import Footer from "./Footer";


const App = () => {
    return (
        <div>
        <ClientsContainer />
        
        <NotesContainer />
        <Footer/>
        < Router />
        
        </div>
    );
};

export default App;