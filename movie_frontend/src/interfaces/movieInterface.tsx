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
