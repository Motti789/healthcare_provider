import React from "react";

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



const Client = () => {
    const { id } = useParams();
    const clientId = useSelector(state => state.clients.find(obj => obj.id === parseInt(id)))
    
    
    return (
        <div className="client-name">
         Name: {clientId && clientId.name} <br></br> Age: {clientId && clientId.age} <br></br> Date Of Birth: {clientId && clientId.birth_date} <br></br> Caregiver Name: {clientId && clientId.caregiver_name} <br></br> Caregiver Phone Number: {clientId && clientId.caregiver_phone_number} <br></br> Address: {clientId && clientId.address} 
          <br></br>
          <br></br>
        </div>
    );
};







export default Client;