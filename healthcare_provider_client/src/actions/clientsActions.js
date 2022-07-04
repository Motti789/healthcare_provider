export const fetchClients = () => {
  return(dispatch) => {
    fetch('http://localhost:3000/clients')
    .then(resp => resp.json())
    .then(clients =>dispatch({type: 'FETCH_CLIENTS', payload: clients}) )
  }
}


export const addClient = client => {
return dispatch => {
fetch('http://localhost:3000/clients', {
  method: 'POST',
 body: JSON.stringify(client),
 headers: {'Content-Type': 'application/json'}
})
    .then(resp => resp.json())
    .then(client =>dispatch({type: 'ADD_CLIENT', payload: client}) )
    alert("Client Successfully Added")
    
}
}