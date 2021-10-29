import { useEffect, useState } from "react";
import { IMovie } from "../../../interfaces/movieInterface";
import {
  get,
  GET_RANDOM_MOVIES,
  GET_TOP_RATED_MOVIES,
} from "../../../services/restService";
export const useMovies = () => {
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await get(GET_RANDOM_MOVIES);
        console.log(data);

        setMovies(data);
      } catch (err: any) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  return movies;
};
