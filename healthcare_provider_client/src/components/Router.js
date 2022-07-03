import React from "react";
import { Routes, Route} from 'react-router-dom'

import Home from '../components/Home'
import Resources from './Resources'



const Router = () => {
    return (
       <Routes>
           <Route exact path='/' element={<Home/>} />
           <Route path='/resources' element={<Resources/>} />
       </Routes>
    );
};

export default Router;