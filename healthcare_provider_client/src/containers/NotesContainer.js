import React from "react";

import  { fetchNotes }  from '../actions/notesActions'
import NotesForm from "../components/NotesForm";
import Note from "../components/Note";

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



const NotesContainer = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchNotes());
    }, [dispatch]);


    const { id } = useParams();
    const clientId = useSelector(state => state.clients.find(obj => obj.id === parseInt(id)))
   
    const noteId = useSelector(state => state.notes.filter(note => note.client_id === parseInt(id)))
    const notes = noteId.map(note => <ul className="list"><li  key={note.id}>{note.notes} </li></ul>)
    console.log(notes)
      

    return(

      <div>
      <h4>Client Notes</h4>
         {notes}
         <NotesForm client={clientId && clientId.id} />
      </div>
    );
};


export default NotesContainer;
