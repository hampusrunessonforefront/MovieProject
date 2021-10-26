import { Box, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MovieList } from "../AllMoviesPage/components/MovieList";
import { IMovie } from "../../interfaces/movieInterface";
import {
  deleteMovie,
  get,
  GET_TOP_RATED_MOVIES,
} from "../../services/restService";
import { sortMoviesDesc } from "./comparisonFunction";

export const TopRatedPage = () => {
  const [movies, setMovies] = useState<IMovie[]>();

  useEffect(() => {
    const fetch = async () => {
      const data = await get(GET_TOP_RATED_MOVIES);
      setMovies(data.sort(sortMoviesDesc));
    };
    fetch();
  }, []);

  const handleDelete = async (id: string) => {
    setMovies(movies!.filter((movie) => movie.id != id));
    await deleteMovie(id);
  };

  return (
    <Box
      sx={{ width: "100%", height: "100%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      {movies != undefined && (
        <MovieList
          handleDelete={handleDelete}
          movies={movies}
          indexing={true}
        ></MovieList>
      )}
    </Box>
  );
};
