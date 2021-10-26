import { IMovie } from "../../../interfaces/movieInterface";

import { Button, makeStyles } from "@material-ui/core";
import { Divider, Grid, ListItem, ListItemButton } from "@mui/material";
import { Rating } from "../../MoviePage/components/Rating";
import { useHistory } from "react-router";

export const MovieItem = (movie: IMovie) => {
  const history = useHistory();

  const handleClick = () => {
    history.push({ pathname: `/movie/${movie.id}` });
  };
  const classes = useStyles();
  return (
    <>
      <ListItem>
        <ListItemButton onClick={handleClick}>
          <Grid container direction="column" justifyContent="flex-start">
            <h3>{movie.title}</h3>
          </Grid>
          <Grid container justifyContent="flex-end">
            <div>
              <Rating
                rating={movie.rating}
                numberOfVotes={movie.numberOfVotes}
              ></Rating>
            </div>
          </Grid>
        </ListItemButton>
      </ListItem>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  divider: {
    // Theme Color, or use css color in quote
    background: "white",
  },
}));
