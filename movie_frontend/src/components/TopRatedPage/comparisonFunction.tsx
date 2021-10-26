import { IMovie } from "../../interfaces/movieInterface";

export const sortMoviesDesc = (a: IMovie, b: IMovie) => {
  if (a.rating < b.rating) {
    return 1;
  }
  if (a.rating > b.rating) {
    return -1;
  }
  return 0;
};
