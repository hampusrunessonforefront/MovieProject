import { makeStyles } from "@material-ui/core";
import React from "react";
import { IMovie } from "../../../interfaces/movieInterface";
import { MovieItem } from "./MovieItem";
import { Divider, Grid, List } from "@mui/material";
import { DeleteButton } from "./DeleteButton";
import { deleteMovie } from "../../../services/restService";
export const MovieList = (props: {
  movies: IMovie[];
  handleDelete(id: string): void;
  indexing?: boolean;
}) => {
  const checkOnBottom = (event: any) => {
    if (event.target.scrollTop === event.target.scrollHeight) {
      console.log("NU ÄR VI I BOTTEN");
    }
  };

  const classes = useStyles();
  return (
    <List sx={{ width: "50%" }} onScroll={() => console.log("asdfsafasdf")}>
      {props.movies.map((movie, index) => (
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
          key={index}
        >
          {props.indexing && (
            <Grid item xs={1}>
              <h3>{index + 1}</h3>
            </Grid>
          )}
          <Grid item xs={10}>
            <MovieItem
              id={movie.id}
              title={movie.title}
              genre={movie.genre}
              description={movie.description}
              rating={movie.rating}
              imageUrl={movie.imageUrl}
              numberOfVotes={movie.numberOfVotes}
            />
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={1}>
            <DeleteButton
              id={movie.id}
              handleDelete={props.handleDelete}
            ></DeleteButton>
          </Grid>
        </Grid>
      ))}
    </List>
  );
};

const useStyles = makeStyles((theme) => ({
  divider: {
    // Theme Color, or use css color in quote
    background: "white",
  },
}));
