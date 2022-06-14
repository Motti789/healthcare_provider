import React, { Component } from 'react';
import {addNote} from '../actions/notesActions'
import { connect } from 'react-redux';

class NotesForm extends Component {

    state = {
        text: ''
    }

    handleOnChange = event => {
        this.setState({
          text: event.target.value
        });
      }


    handleSubmit = event => {
        event.preventDefault()
        this.props.addClient(this.state.text)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
             <label>Note:</label>
             <input type='text' value={this.state.text} onChange={this.handleChange}/>
             <input type='submit' value="Add Client"/>
            </form>
        );
    }
}

export default connect(null, {addNote})(NotesForm)