import React, { createContext } from "react";

const MovieContext = createContext({
  movie_name: "",
  set_movie_name: () => {},
  movie_detail: "",
  set_movie_detail: () => {},
  show_detail: false,
  set_show_detail: () => {},
  show_comment: false,
  set_show_comment: () => {},
});
export default MovieContext;
