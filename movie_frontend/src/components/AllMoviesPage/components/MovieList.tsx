import { makeStyles } from "@material-ui/core";

import { IMovie } from "../../../interfaces/movieInterface";
import { MovieItem } from "./MovieItem";
import { Divider, Grid, List } from "@mui/material";
import { DeleteButton } from "./DeleteButton";

interface movieListProps {
  movies: IMovie[];
  handleDelete(id: string): void;
  indexing?: boolean;
}

export const MovieList = (props: movieListProps) => {
  const checkOnBottom = (event: any) => {
    if (event.target.scrollTop === event.target.scrollHeight) {
      console.log("NU ÄR VI I BOTTEN");
    }
  };

  const classes = useStyles();
  return (
    <List onScroll={() => console.log("asdfsafasdf")}>
      {props.movies.map((movie, index) => (
        <Grid
          container
          spacing={4}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={11}>
            <MovieItem
              index={props.indexing ? index : undefined}
              movie={movie}
              handleDelete={props.handleDelete}
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
