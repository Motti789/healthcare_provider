import React, { Component } from 'react';
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {addClient} from '../actions/clientsActions'
import { connect } from 'react-redux';

class ClientsForm extends Component {

    state = {
    name: '',
    age: '',
    birth_date: '',
    caregiver_name: '',
    caregiver_phone_number: '',
    address: ''
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
        [name]: value
    })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addClient(this.state)
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                 <br/>
                <label>Age: </label>
                <input type='text' value={this.state.age} onChange={this.handleChange} name="age"/>
                <br/> 
                <label>Date Of Birth: </label>
                <input type='text' value={this.state.birth_date} onChange={this.handleChange} name="birth_date"/>
                <br/>
                <label>Caregiver Name: </label>
                <input type='text' value={this.state.caregiver_name} onChange={this.handleChange} name="caregiver_name"/>
                <br/>
                <label>Phone Number: </label>
                <input type='text' value={this.state.caregiver_phone_number} onChange={this.handleChange} name="caregiver_phone_number"/>
                <br/>
                <label>Address: </label>
                <input type='text' value={this.state.address} onChange={this.handleChange} name="address"/>
                <br/>
                <input type='submit' value="Add Client"/>
            </form>
        );
    }
}

export default connect(null, {addClient})(ClientsForm)

