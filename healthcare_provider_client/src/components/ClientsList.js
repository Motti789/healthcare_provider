import React from "react";
import { connect } from "react-redux";



const ClientsList = ({clients}) => {
    
    return (
        <div>
         {clients.map((client, id) =>  <ul key={id}><li ><a href={`/clients/${client.id}`}>{client.name}</a> </li></ul>)}
         <br></br>
         Your total amount of clients: {clients.length}
        </div>
    );
};


const mapStateToProps = state => {
    return {clients: state.clients}
}



export default connect(mapStateToProps)(ClientsList);







