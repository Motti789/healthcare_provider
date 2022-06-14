import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchClients }  from '../actions/clientsActions'
import ClientsForm from './ClientsForm';
import ClientsList from './ClientsList';

class ClientsContainer extends Component {

    componentDidMount() {
        this.props.fetchClients()
    }

    render() {
        return(
            <div>
           <ClientsForm />
            </div>
        );
    }
}


export default connect(null, { fetchClients })(ClientsContainer);