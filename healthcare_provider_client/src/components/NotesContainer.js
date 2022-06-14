import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchNotes }  from '../actions/notesActions'
import NotesForm from './NotesForm';
import NotesList from './NotesList';

class NotesContainer extends Component {
    render() {
        return(
            <div>

            </div>
        )
    }
}

export default connect(null, {fetchNotes })(NotesContainer)
