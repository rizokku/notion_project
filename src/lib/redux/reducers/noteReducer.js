import { initialState } from "../store";

export const noteReducer = (state = initialState.notes, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.payload];

    case "DELETE_NOTE":
      return state.filter((note) => note.id !== action.payload);

    case "UPDATE_NOTE":
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, ...action.payload.data }
          : note
      );

    default:
      return state;
  }
};

// import { initialState } from "../store";

// export const noteReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_NOTE":
//       return [...state, action.payload];
//     case "DELETE_NOTE":
//       return state.filter((note) => note.id !== action.payload);
//     default:
//       return state;
//   }
// };
