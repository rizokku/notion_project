import { initialState } from "../store";

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      console.log(state, action);
      return [...state, action.payload];
    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};