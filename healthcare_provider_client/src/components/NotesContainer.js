import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { fetchNotes }  from '../actions/notesActions'

import Note from  './Note'

class NotesContainer extends Component {

    componentDidMount() {
        this.props.fetchNotes()
    }
    render() {
        return(
            <div>
           <Note />
            </div>
        )
    }
}

export default connect(null, {fetchNotes })(NotesContainer)
