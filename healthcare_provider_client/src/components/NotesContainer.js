import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchNotes }  from '../actions/notesActions'
import NotesForm from './NotesForm';
import NotesList from './NotesList';

class NotesContainer extends Component {

    componentDidMount() {
        this.props.fetchNotes()
    }
    render() {
        return(
            <div>
           <NotesForm />
            </div>
        )
    }
}

export default connect(null, {fetchNotes })(NotesContainer)
