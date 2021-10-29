import { useParams } from "react-router-dom";

import { MovieInfo } from "./components/MovieInfo";
import { Rating } from "./components/Rating";
import { RateMovie } from "./components/RateMovie";

import { useMovie } from "./components/MovieHook";
import { Box } from "@mui/material";
import { height } from "@mui/system";
export const MoviePage = () => {
  const { movieId } = useParams<{ movieId: string }>();

  const { movie, handleRatingChange } = useMovie(movieId);

  return (
    <Box sx={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: "20px" }}>
      {movie && (
        <MovieInfo
          movie={movie}
          handleRatingChange={handleRatingChange}
        ></MovieInfo>
      )}
    </Box>
  );
};
