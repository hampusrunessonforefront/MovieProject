import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { IMovie, IRating } from "../../../interfaces/movieInterface";
import { RatingClassKey } from "@mui/material";

export const Rating = ({ rating, numberOfVotes }: IRating) => {
  const [dispRating, setDispRating] = useState("");

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
  const classes = useStyles();
  return (
    <Grid container spacing={1} direction="row">
      <Grid item>
        <div className={classes.divContainer}>
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
      </Grid>
      <Grid item>
        <div className={classes.divContainer}>
          <h3 className={classes.text}>{rating}/10</h3>
          <h6 className={classes.text}>{convertNumber(numberOfVotes)} votes</h6>
        </div>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles({
  divContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50px",
    width: "50px",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  text: {
    margin: 1,
  },
});
