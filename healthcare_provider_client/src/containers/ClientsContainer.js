import React, { Component } from 'react';
import { connect } from 'react-redux';

import  { fetchClients }  from '../actions/clientsActions'
import Client from '../components/Client';
import ClientsList from '../components/ClientsList';
import ClientsForm from '../components/ClientsForm';


import { Routes, Route} from 'react-router-dom'
import NotesContainer from './NotesContainer';



class ClientsContainer extends Component {

    componentDidMount() {
        this.props.fetchClients()
    }

    render() {
        return(
        <Routes>
          <Route  path='/clients' element={<ClientsList/>} />
          <Route  path='/clients/:id' element={<><Client/><NotesContainer/></>}/> 
          <Route  path='/add_client' element={<ClientsForm/>} />
            
        </Routes>
        );
    }
}


export default connect(null, { fetchClients })(ClientsContainer);