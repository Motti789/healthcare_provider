
export const fetchClients = () => {
    return(dispatch) => {
      fetch('http://localhost:3000/clients')
      .then(resp => resp.json())
      .then(clients =>dispatch({type: 'FETCH_CLIENTS', payload: clients}) )
    }
}

