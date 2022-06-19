import React from "react";
import { Routes, Route, useParams} from 'react-router-dom'

import Home from '../components/Home'
import ClientsList from './ClientsList'
import About from '../components/About'
import Client from "./Client";
import NotesList from "./NotesList";
import ClientsForm from "./ClientsForm";






const Router = () => {
    return (
       <Routes>
           <Route exact path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route  path='/clients' element={<ClientsList/>} />
           <Route  path='/clients/:id' element={<Client/>} />
           <Route  path='/add_client' element={<ClientsForm/>} />
           
           <Route  path='/client_notes' element={<NotesList/>} />
       </Routes>
    );
};

export default Router;