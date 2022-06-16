import React from "react";
import { connect } from "react-redux";



const FilteredClient = ({clients}) => {
    return (
        <div>
         {clients.map(client => <ul><li key={client.id}> {client.name}- {client.age} - {client.birth_date} - {client.caregiver_name} - {client.caregiver_phone_number} - {client.address}  </li></ul>)}
         
        </div>
        
    );
};

// const associatedNotes = notes.filter(note => note.client_id === clientId);

const mapStateToProps = state => {
    return {client: state.clients.find(client => client === client.id)}
}



export default connect(mapStateToProps, {})(FilteredClient)