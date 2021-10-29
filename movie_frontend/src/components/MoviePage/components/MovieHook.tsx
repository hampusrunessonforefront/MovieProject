import { useEffect, useState } from "react";
import { IMovie } from "../../../interfaces/movieInterface";
import {
  get,
  GET_MOVIE,
  patch,
  PATCH_MOVIE,
} from "../../../services/restService";

export const useMovie = (movieId: string) => {
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const getMovie = async () => {
      const data = await get(GET_MOVIE, movieId);

      setMovie(data);
    };
    getMovie();
  }, [movieId]);

  const handleRatingChange = async (rating: number) => {
    if (movie !== undefined) {
      const votes = movie.numberOfVotes + 1;
      const addToRating = (rating - movie.rating) / votes;
      const newRating = Math.round((movie.rating + addToRating) * 10) / 10;

      setMovie({
        ...movie,
        rating: newRating,
        numberOfVotes: votes,
      });
      await patch(PATCH_MOVIE, movie.id, {
        rating: newRating,
        numberOfVotes: votes,
      });
    }
  };
  return { movie, handleRatingChange };
};
