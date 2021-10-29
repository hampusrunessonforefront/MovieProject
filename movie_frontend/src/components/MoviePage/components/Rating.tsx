import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect } from "react";

import { IRating } from "../../../interfaces/movieInterface";

interface RatingProps {
  rating: number;
  numberOfVotes: number;
}

export const Rating = (props: RatingProps) => {
  const { rating, numberOfVotes } = props;
  const convertNumber = (labelValue: number) => {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
      : // Six Zeroes for Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
      : // Three Zeroes for Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(0) + "K"
      : Math.abs(Number(labelValue));
  };

  useEffect(() => {}, [rating]);

  return (
    <Card sx={{ display: "flex", boxShadow: "none" }}>
      <CardMedia
        component={() => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: 10,
            }}
          >
            <svg
              fill="#FFD700"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 30 30"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
          </div>
        )}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            {rating}/10
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {convertNumber(numberOfVotes)} votes
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
