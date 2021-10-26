import { Box, List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MovieList } from "./components/MovieList";
import { IMovie } from "../../interfaces/movieInterface";
import { ALL_MOVIES, deleteMovie, get } from "../../services/restService";

export const AllMoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>();
  const [test, setTest] = useState();

  useEffect(() => {
    const fetch = async () => {
      const data = await get(ALL_MOVIES);
      console.log(data);

      setMovies(data);
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
        <MovieList movies={movies} handleDelete={handleDelete}></MovieList>
      )}
    </Box>
  );
};
