import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchClients }  from '../actions/clientsActions'
import Client from './Client';



class ClientsContainer extends Component {

    componentDidMount() {
        this.props.fetchClients()
    }

    render() {
        return(
            <div>
          
            </div>
        );
    }
}


export default connect(null, { fetchClients })(ClientsContainer);