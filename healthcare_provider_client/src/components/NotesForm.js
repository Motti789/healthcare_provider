import React, { Component } from 'react';
import {addNote} from '../actions/notesActions'
import { connect } from 'react-redux';

class NotesForm extends Component {

    state = {
        notes: ''
    }

    handleChange = event => {
        this.setState({
          notes: event.target.value
        });
      }


    handleSubmit = event => {
        event.preventDefault()
        this.props.addNote(this.state.notes)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
             <label>Note:</label>
             <input type='text' value={this.state.notes} onChange={this.handleChange}/>
             <input type='submit' value="Add Note"/>
            </form>
        );
    }
}





export default connect(null, {addNote})(NotesForm)