import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { IMovie } from "../../../interfaces/movieInterface";
import defaultImg from "../../../images/avengers.jpeg";
import { useTheme } from "@mui/material/styles";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { height } from "@mui/system";
import { Movie } from "@material-ui/icons";
import { Rating } from "./Rating";
import { RateMovie } from "./RateMovie";
interface MovieInfoProps {
  movie: IMovie;
  handleRatingChange(rating: number): void;
}

export const MovieInfo = (movieProps: MovieInfoProps) => {
  const { movie, handleRatingChange } = movieProps;
  const theme = useTheme();
  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: "45%" }}
        image={movie.imageUrl}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h4">
            {movie.title}
          </Typography>
          <Typography
            component="div"
            variant="subtitle2"
            color="text.secondary"
          >
            {movie.genre}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {movie.director}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
            sx={{ paddingTop: "20px" }}
          >
            {movie.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Rating rating={movie.rating} numberOfVotes={movie.numberOfVotes} />
          <RateMovie handleRatingChange={handleRatingChange}></RateMovie>
        </Box>
      </Box>
    </Card>
  );
};
