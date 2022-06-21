import React from "react";
import Router from "./Router";

import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientsContainer from "./ClientsContainer";
import NotesContainer from "./NotesContainer";
import '../App.css';
import NotesList from "./NotesList";
import Footer from "./Footer";


const App = () => {
    return (
        <div>
        <ClientsContainer />
        {/* <NotesContainer /> */}
        <Footer/>
        < Router />
        
        </div>
    );
};

export default App;