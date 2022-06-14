
export const fetchNotes = () => {
    return(dispatch) => {
      fetch('http://localhost:3000/client_notes')
      .then(resp => resp.json())
      .then(notes =>dispatch({type: 'FETCH_NOTES', payload: notes}) )
    }
}

export const addNote = note => {
  return dispatch => {
  fetch('http://localhost:3000/client_notes', {
    method: 'POST',
   body: JSON.stringify(note),
   headers: {'Content-Type': 'application/json'}
  })
      .then(resp => resp.json())
      .then(note =>dispatch({type: 'ADD_NOTE', payload: note}) )
}
}

