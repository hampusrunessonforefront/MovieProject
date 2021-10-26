import React from "react";
import { Grid } from "@material-ui/core";
import { IMovie } from "../../../interfaces/movieInterface";
import defaultImg from "../../../images/avengers.jpeg";
import { makeStyles } from "@mui/styles";

export const MovieInfo = (movie: IMovie) => {
  return (
    <Grid container direction="row" spacing={6} justifyContent="center">
      <Grid item xs={2}></Grid>
      <Grid item xs={4}>
        <img
          src={movie.imageUrl == null ? defaultImg : movie.imageUrl}
          width={"100%"}
        />
      </Grid>

      <Grid item xs={6}>
        <h1>{movie.title} </h1>
        <h6>
          Released in {movie.releaseYear} {movie.runtime}
        </h6>
        <h6>{movie.genre}</h6>
        <h6>{movie.director}</h6>
        <h4>{movie.description}</h4>
      </Grid>
    </Grid>
  );
};
