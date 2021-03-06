import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { MovieList } from "./components/MovieList";
import { IMovie } from "../../interfaces/movieInterface";
import {
  ALL_MOVIES,
  deleteMovie,
  get,
  GET_MOVIES_BY_GENRE,
} from "../../services/restService";

export const AllMoviesPage = () => {
  const [movies, setMovies] = useState<IMovie[]>();

  const [genre, setGenre] = useState<string>();
  useEffect(() => {
    const fetch = async () => {
      const data = await get(ALL_MOVIES);
      setMovies(data);
    };
    fetch();
  }, []);

  const handleDelete = async (id: string) => {
    setMovies(movies!.filter((movie) => movie.id !== id));
    await deleteMovie(id);
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await get(GET_MOVIES_BY_GENRE, genre);
      setMovies(data);
    };
    if (genre) {
      fetch();
    }
  }, [genre]);

  return (
    <Grid
      container
      spacing={2}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignContent="center"
    >
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <div>
          {movies !== undefined && (
            <MovieList movies={movies} handleDelete={handleDelete}></MovieList>
          )}
        </div>
      </Grid>
      <Grid item xs={2}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre ?? " "}
            label="Genre"
            MenuProps={MenuProps}
            autoWidth
            onChange={(event) => {
              setGenre(event.target.value as string);
            }}
          >
            {genres.map((item, index) => (
              <MenuItem key={index} value={item.genre}>
                {item.genre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 50 * 4.5 + 8,
      width: 250,
    },
  },
};

const genres = [
  { genre: "Drama" },
  { genre: "Crime" },
  { genre: "Action" },
  { genre: "Adventure" },
  { genre: "Biography" },
  { genre: "History" },
  { genre: "Sci-Fi" },
  { genre: "Romance" },
  { genre: "Western" },
  { genre: "Fantasy" },
  { genre: "Comedy" },
  { genre: "Thriller" },
  { genre: "Animation" },
  { genre: "Family" },
  { genre: "War" },
  { genre: "Mystery" },
  { genre: "Music" },
  { genre: "Sport" },
  { genre: "Horror" },
  { genre: "Musical" },
  { genre: "Film-Noir" },
  { genre: "test" },
];
