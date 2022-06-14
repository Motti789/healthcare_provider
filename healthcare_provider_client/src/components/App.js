import React from "react";
import Router from "./Router";
import ClientsContainer from "./ClientsContainer";
import NotesContainer from "./NotesContainer";

const App = () => {
    return (
        <div>
        <ClientsContainer />
        <NotesContainer />
        < Router />
        </div>
    );
};

export default App;