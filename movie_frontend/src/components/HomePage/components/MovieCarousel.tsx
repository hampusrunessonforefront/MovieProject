import { makeStyles } from "@material-ui/core/styles";

import Carousel from "react-material-ui-carousel";
import { IMovie } from "../../../interfaces/movieInterface";
import { CarouselItem } from "./CarouselItem";

export const MovieCarousel = (props: { movies: IMovie[] }) => {
  const classes = useStyles();
  return (
    <div className={classes.divContainer}>
      <Carousel
        interval={5000}
        animation="slide"
        navButtonsAlwaysVisible
        className={classes.carousel}
      >
        {props.movies.map((movie, index) => (
          <CarouselItem key={index} {...movie}></CarouselItem>
        ))}
      </Carousel>
    </div>
  );
};

const useStyles = makeStyles((theme: any) => ({
  carousel: {
    paddingTop: "5%",
    width: "80%",
  },
  divContainer: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
}));
