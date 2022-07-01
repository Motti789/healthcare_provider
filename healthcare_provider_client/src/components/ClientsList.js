import React from "react";
import { connect } from "react-redux";



const ClientsList = ({clients}) => {
    
    return (
        <div>
         {clients.map((client, id) =>  <ul key={id}><li ><a href={`/clients/${client.id}`}>{client.name}</a> </li></ul>)}
        
        </div>
        
    );
};

// const associatedNotes = notes.filter(note => note.client_id === clientId);

const mapStateToProps = state => {
    return {clients: state.clients}
}





export default connect(mapStateToProps)(ClientsList);







