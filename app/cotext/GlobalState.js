import React, { createContext } from "react";

const movienameInitState = { movie_name: "" };
const ContextStore = createContext({
  movie_name: "",
});

function movieReducer(state, action) {
  switch (action.type) {
    case "ALTER_NAME":
      return {
        ...state,
        movie_name: action.payload.name,
      };
    default:
      return state;
  }
}
