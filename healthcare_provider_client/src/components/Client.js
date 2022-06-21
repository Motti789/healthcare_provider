import React from "react";

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';




const Client = () => {
    const { id } = useParams();
    const client = useSelector(state => state.clients.find(obj => obj.id === parseInt(id)))
      
    return (
        <div>
      {client} 
        </div>
        
    );
};


// {client.id} - {client.name} - {client.age} - {client.birth_date} - {client.caregiver_name} - {client.caregiver_phone_number} - {client.address}




export default Client;