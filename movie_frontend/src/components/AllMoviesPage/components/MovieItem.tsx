import { IMovie } from "../../../interfaces/movieInterface";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Rating } from "../../MoviePage/components/Rating";
import { useHistory } from "react-router";
import defaultImg from "../../../images/avengers.jpeg";
import { DeleteButton } from "./DeleteButton";
import { display } from "@mui/system";

interface movieItemProps {
  index?: number;
  movie: IMovie;
  handleDelete(id: string): void;
}

export const MovieItem = (props: movieItemProps) => {
  const { movie, index, handleDelete } = props;
  const history = useHistory();

  return (
    <>
      <Card
        sx={{
          height: "200",
          width: "100%",
          paddingBottom: "20px",
          paddingTop: "20px",
        }}
      >
        <CardActionArea
          onClick={() => {
            history.push({ pathname: `/movie/${movie.id}` });
          }}
          sx={{ display: "flex", justifyContent: "flex-start" }}
        >
          <CardMedia
            component="img"
            sx={{ width: "200px" }}
            image={movie.imageUrl}
            alt="Live from space album cover"
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "50px",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6">
                {index ?? ""}
                {".   "}
                {movie.title}
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Rating
                rating={movie.rating}
                numberOfVotes={movie.numberOfVotes}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            {/* <DeleteButton
              id={movie.id}
              handleDelete={handleDelete}
            ></DeleteButton> */}
          </Box>
        </CardActionArea>
      </Card>
      {/* <ListItem>
        <ListItemButton onClick={handleClick}>
        <Grid container direction="row">
        <Grid item xs={2}>
        <img src={movie.imageUrl ?? defaultImg} width="50px" alt="err" />
            </Grid>
            <Grid item xs={5}>
              <h3>{movie.title}</h3>
            </Grid>
            <Grid item xs={5}>
              <div>
                <Rating
                  rating={movie.rating}
                  numberOfVotes={movie.numberOfVotes}
                ></Rating>
              </div>
            </Grid>
          </Grid>
        </ListItemButton>
      </ListItem> */}
    </>
  );
};
