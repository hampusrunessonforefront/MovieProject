import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IMovie } from "../../interfaces/movieInterface";
import { MovieInfo } from "./components/MovieInfo";
import { Rating } from "./components/Rating";
import { RateMovie } from "./components/RateMovie";
import { get, GET_MOVIE, patch, PATCH_MOVIE } from "../../services/restService";
import { Grid } from "@material-ui/core";

export const MoviePage = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    const getMovie = async () => {
      const data = await get(GET_MOVIE, movieId);
      console.log(data);

      setMovie(data === undefined ? undefined : data);
    };
    getMovie();
  }, [movieId]);

  const handleRatingChange = async (rating: number) => {
    if (movie != undefined) {
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

  return (
    <>
      {movie != undefined && (
        <div style={{ margin: "2%" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignContent="center"
          >
            <Grid item xs={8}>
              <MovieInfo
                id={movie.id}
                title={movie.title}
                description={movie.description}
                rating={movie.rating}
                numberOfVotes={movie.numberOfVotes}
                genre={movie.genre}
                imageUrl={movie.imageUrl}
                director={movie.director}
                runtime={movie.runtime}
                gross={movie.gross}
                releaseYear={movie.releaseYear}
              ></MovieInfo>
            </Grid>
            <Grid item xs={4}>
              <Rating
                rating={movie.rating}
                numberOfVotes={movie.numberOfVotes}
              ></Rating>

              <RateMovie handleRatingChange={handleRatingChange}></RateMovie>
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};
