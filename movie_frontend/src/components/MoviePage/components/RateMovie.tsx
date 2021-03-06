import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Rating } from "react-simple-star-rating";

interface RateMovieProps {
  handleRatingChange(rating: number): void;
}

export const RateMovie = (props: RateMovieProps) => {
  //TODO lägg till knapp som ändrar rating på film
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
    setOpen(false);
    props.handleRatingChange(rate);
  };

  const classes = useStyles();
  return (
    <>
      <Card sx={{ display: "flex" }}>
        <CardActionArea
          onClick={() => {
            console.log("asdf");
          }}
          sx={{ display: "flex" }}
        >
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
                  fill="blue"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 30 30"
                >
                  <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
                </svg>
              </div>
            )}
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6">
                Rate movie
              </Typography>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Rate Movie"}</DialogTitle>
        <DialogContent>
          <Rating
            stars={10}
            onClick={handleRating}
            ratingValue={rating}
          ></Rating>
        </DialogContent>
      </Dialog>
    </>
  );
};

const useStyles = makeStyles({
  divContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
  },
  btn: {
    margin: 0,
  },
  h3color: { color: "white" },
});
