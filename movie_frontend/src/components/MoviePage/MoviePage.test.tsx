import React from "react";
import { render, screen } from "@testing-library/react";
import { IMovie, IMovieService } from "../../interfaces/movieInterface";
import ReactRouter from "react-router";
import * as MovieHook from "./components/MovieHook";
import { MoviePage } from "./MoviePage";
const movieService: IMovieService = {
  movie: {
    id: "1",
    title: "THE TITLE IS TEST",
    description: "testtesttest",
    genre: "test",
    rating: 10,
    numberOfVotes: 1,
  },
  handleRatingChange: (rating: number) => {
    throw new Error("Function not implemented.");
  },
};

test("loading case", () => {
  jest.spyOn(MovieHook, "useMovie").mockImplementation(() => movieService);

  jest.spyOn(ReactRouter, "useParams").mockReturnValue({ movieId: "1" });
  // id = 1234 in your tested component

  render(<MoviePage />);

  const linkElement = screen.getByText("THE TITLE IS TEST");
  expect(linkElement).toBeInTheDocument();
});
