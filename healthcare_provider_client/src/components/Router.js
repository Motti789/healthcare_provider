import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import ClientsList from './ClientsList'
import About from '../components/About'
import Client from "./Client";
import NotesList from "./NotesList";



const Router = () => {
    return (
       <Routes>
           <Route exact path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route  path='/clients' element={<ClientsList/>} />
           <Route  path='/client' element={<Client/>} />
           <Route  path='/client_notes' element={<NotesList/>} />
       </Routes>
    );
};

export default Router;