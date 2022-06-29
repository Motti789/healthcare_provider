import React from "react";
import NotesForm from "./NotesForm";


import { connect } from "react-redux";


import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';




const Client = (props) => {
    const { id } = useParams();
    
    const clientId = useSelector(state => state.clients.find(obj => obj.id === parseInt(id)))
   
    const noteId = props.notes.filter(note => note.client_id === parseInt(id))

    const notes = noteId.map(note => <ul class="list"><li  key={note.id}>{note.notes} </li></ul>)
    

    return (
        <div>
         Name: {clientId && clientId.name} <br></br> Age: {clientId && clientId.age} <br></br> Date Of Birth: {clientId && clientId.birth_date} <br></br> Caregiver Name: {clientId && clientId.caregiver_name} <br></br> Caregiver Phone Number: {clientId && clientId.caregiver_phone_number} <br></br> Address: {clientId && clientId.address} 
          <br></br>
          <br></br>
          <h4>Client Notes</h4>
          {notes}
          <NotesForm client={clientId && clientId.id} /> 
        
        </div>
    );
};

const mapStateToProps = state => {
    return {notes: state.notes}
}




// {client.id} - {client.name} - {client.age} - {client.birth_date} - {client.caregiver_name} - {client.caregiver_phone_number} - {client.address}
// {client && client.name}

export default connect(mapStateToProps)(Client);