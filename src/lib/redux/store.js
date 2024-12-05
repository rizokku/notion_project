import { createStore } from "redux";
import { noteReducer } from "./reducers/noteReducer";

export const initialState = [];

const store = createStore(noteReducer);

export default store;