import { CardActionArea } from "@material-ui/core";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";

import { IMovie } from "../../../interfaces/movieInterface";

export const CarouselItem = (movie: IMovie) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    // <div>
    //   <img
    //     src={movie.imageUrl}
    //     className={classes.image}
    //     alt="bild saknas"
    //   ></img>
    // </div>
    <Card className={classes.card}>
      <CardActionArea
        onClick={() => {
          history.push({ pathname: `/movie/${movie.id}` });
        }}
      >
        <CardMedia image={movie.imageUrl} component="img" />
        <Box py={3} px={2} className={classes.content}>
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            by {movie.director}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 200,
    minHeight: 360,
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "64%",
      bottom: 0,
      zIndex: -1,

      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "95%",
  },
}));
