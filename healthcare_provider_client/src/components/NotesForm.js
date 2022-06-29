import React, { Component } from 'react';
import {addNote} from '../actions/notesActions'
import { connect } from 'react-redux';





class NotesForm extends Component {

    state = {
        notes: '',
        client_id: ''
    }

    handleChange = event => {
        this.setState({
          notes: event.target.value,
          client_id: this.props.client
          
        });
      }

    


    handleSubmit = event => {
        event.preventDefault()
        this.props.addNote(this.state.notes, this.props.client)
        this.setState({
            notes: ''

        })
    }

    render() {
        return (
            <div class="form-group">
            <form onSubmit={this.handleSubmit}>
             <label for="note">Note:</label>
             <textarea class="form-control" rows="5" id="note" value={this.state.notes} onChange={this.handleChange} required></textarea>
             <input type='submit' value="Add Note"/>
            </form>
            </div>
        );
    }
}









export default connect(null, {addNote})(NotesForm)