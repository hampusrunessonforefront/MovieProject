export interface IMovie {
  id: string;
  title: string;
  genre: string;
  description: string;
  imageUrl?: string;
  director?: string;
  runtime?: string;
  gross?: string;
  releaseYear?: number;
  rating: number;
  numberOfVotes: number;
}

export interface IRating {
  rating: number;
  numberOfVotes: number;
}

export interface IMovieService {
  movie: IMovie;
  handleRatingChange(rating: number): Promise<void>;
}

export interface IMovieOptionType {
  id: string;
  inputValue?: string;
  title: string;
  genre: string;

  description: string;
  rating: number;
  numberOfVotes: number;
}
