import React from "react";
import Router from "./Router";

import { Button, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClientsContainer from "./ClientsContainer";
import NotesContainer from "./NotesContainer";
import '../App.css';


const App = () => {
    return (
        <div>
        <ClientsContainer />
        {/* <NotesContainer /> */}
        < Router />
        
        </div>
    );
};

export default App;