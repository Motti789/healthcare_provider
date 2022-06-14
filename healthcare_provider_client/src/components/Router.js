import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from '../components/Home'
import ClientsList from './ClientsList'
import About from '../components/About'



const Router = () => {
    return (
       <Routes>
           <Route exact path='/' element={<Home/>} />
           <Route path='/about' element={<About/>} />
           <Route  path='/clients' element={<ClientsList/>} />
       </Routes>
    );
};

export default Router;