import React from "react";
import { render, screen } from "@testing-library/react";
import deafultImg from "../../../images/avengers.jpeg";
import { IMovie } from "../../../interfaces/movieInterface";
import { HomePage } from "../HomePage";
import * as MovieCarouselHook from "./MovieCarouselHook";
const movies: IMovie[] = [
  {
    id: "1",
    title: "test",
    description: "testestestset",
    genre: "test",
    rating: 10,
    numberOfVotes: 1,
  },
];

test("loading case", () => {
  jest.spyOn(MovieCarouselHook, "useMovies").mockImplementation(() => movies);
  render(<HomePage />);

  const linkElement = screen.getByText("test");
  expect(linkElement).toBeInTheDocument();
});
