import React from "react";
import { connect } from "react-redux";
import ClientsForm from "./ClientsForm";


const ClientsList = ({clients}) => {
    return (
        <div>
         {clients.map(client => <ul><li key={client.id}>{client.name} - {client.age} - {client.birth_date} - {client.caregiver_name} -
         {client.caregiver_phone_number}</li></ul>)}
         <ClientsForm />
        </div>
        
    );
};

const mapStateToProps = state => {
    return {clients: state.clients}
}

export default connect(mapStateToProps)(ClientsList);







