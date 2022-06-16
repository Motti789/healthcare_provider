import React from "react";
import { connect } from "react-redux";
import ClientsForm from "./ClientsForm";


const ClientsList = ({clients}) => {
    return (
        <div>
         {clients.map(client => <ul><li key={client.id}><a href="/client">{client.name}</a> </li></ul>)}
         <ClientsForm />
        </div>
        
    );
};

// const associatedNotes = notes.filter(note => note.client_id === clientId);

const mapStateToProps = state => {
    return {clients: state.clients}
}





export default connect(mapStateToProps)(ClientsList);







