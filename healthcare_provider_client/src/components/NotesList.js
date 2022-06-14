import React from "react";
import { connect } from "react-redux";

const NotesList = ({notes}) => {
    return (
        <div>
         {notes.map(note => <ul><li key={note.id}>{note.notes}</li></ul>)}
        </div>
    );
};

const mapStateToProps = state => {
    return {notes: state.notes}
}

export default connect(mapStateToProps)(NotesList);