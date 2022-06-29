import React from "react";
import { Routes, Route} from 'react-router-dom'

import Home from '../components/Home'
import ClientsList from './ClientsList'
import Resources from './Resources'
import Client from "./Client";
import NotesList from "./NotesList";
import ClientsForm from "./ClientsForm";






const Router = () => {
    return (
       <Routes>
           <Route exact path='/' element={<Home/>} />
           <Route path='/resources' element={<Resources/>} />
           <Route  path='/clients' element={<ClientsList/>} />
           <Route  path='/clients/:id' element={<Client/>} />
           <Route  path='/add_client' element={<ClientsForm/>} />
           
           <Route  path='/client_notes' element={<NotesList/>} />
       </Routes>
    );
};

export default Router;