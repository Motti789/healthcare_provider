import React, { Component } from 'react';
import {addClient} from '../actions/clientsActions';
import { connect } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <Form onSubmit={this.handleSubmit}>
            <Form.Label>Name: </Form.Label>
            <Form.Control type='text' value={this.state.name} onChange={this.handleChange} name="name" required/>
            <Form.Label>Age: </Form.Label>
              <Form.Control type='text' value={this.state.age} onChange={this.handleChange} name="age" required/>
             
             <Form.Label>Date Of Birth: </Form.Label>
             <Form.Control type='text'   value={this.state.birth_date} onChange={this.handleChange} name="birth_date" required/>
             
             <Form.Label>Caregiver Name: </Form.Label>
             <Form.Control type='text' value={this.state.caregiver_name} onChange={this.handleChange} name="caregiver_name" required/>
             
             <Form.Label>Phone Number: </Form.Label>
             <Form.Control type='text' value={this.state.caregiver_phone_number} onChange={this.handleChange} name="caregiver_phone_number" required/>
             
             <Form.Label>Address: </Form.Label>
             <Form.Control type='text' value={this.state.address} onChange={this.handleChange} name="address" required/>
            
             <Button variant="primary" type="submit">
             Submit
           </Button>
           
        </Form>
    );
}
}




// render() {
//     return (
//         <form onSubmit={this.handleSubmit}>
//             <label>Name: </label>
//             <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
//              <br/>
//             <label>Age: </label>
//             <input type='text' value={this.state.age} onChange={this.handleChange} name="age"/>
//             <br/> 
//             <label>Date Of Birth: </label>
//             <input type='text' value={this.state.birth_date} onChange={this.handleChange} name="birth_date"/>
//             <br/>
//             <label>Caregiver Name: </label>
//             <input type='text' value={this.state.caregiver_name} onChange={this.handleChange} name="caregiver_name"/>
//             <br/>
//             <label>Phone Number: </label>
//             <input type='text' value={this.state.caregiver_phone_number} onChange={this.handleChange} name="caregiver_phone_number"/>
//             <br/>
//             <label>Address: </label>
//             <input type='text' value={this.state.address} onChange={this.handleChange} name="address"/>
//             <br/>
//             <input type='submit' value="Add Client"/>
//         </form>
//     );
// }
// }

export default connect(null, {addClient})(ClientsForm)

