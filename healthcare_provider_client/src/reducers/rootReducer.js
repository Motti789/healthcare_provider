import { combineReducers } from "redux";
import { clientsReducer } from "./clientsReducer";
import {notesReducer} from "./notesReducer";

export const rootReducer = combineReducers({
   clients: clientsReducer,
   notes: notesReducer
})

