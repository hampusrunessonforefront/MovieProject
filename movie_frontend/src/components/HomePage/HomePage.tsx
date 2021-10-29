import { MovieCarousel } from "./components/MovieCarousel";

import { Grid } from "@mui/material";
import { useMovies } from "./components/MovieCarouselHook";
export const HomePage = () => {
  const movies = useMovies();
  return (
    <Grid container>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        {movies && <MovieCarousel movies={movies}></MovieCarousel>}
      </Grid>
      <Grid item xs={4}></Grid>
    </Grid>
  );
};
