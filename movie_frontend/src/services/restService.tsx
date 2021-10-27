import axios from "axios";
import { IMovie, IRating } from "../interfaces/movieInterface";

const BASE_URL_API = "http://localhost:8080";
export const ALL_MOVIES = "/api/movie/getall";
export const MATCHING_MOVIES = "/api/movie/matchingmovies";
export const GET_MOVIE = "/api/movie/get";
export const PATCH_MOVIE = "/api/movie/rating";
export const GET_TOP_RATED_MOVIES = "/api/movie/topratedmovies";
export const ADD_MOVIE = "/api/movie/add";
export const GET_MOVIES_BY_GENRE = "/api/movie/bygenre";
const DELETE_MOVIE = "/api/movie/delete";

export const get = async (endpoint: string, paramValue?: string) => {
  try {
    const response = await axios.get<any>(BASE_URL_API + endpoint, {
      params: { value: paramValue },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const post = async (endpoint: string, body: IMovie) => {
  try {
    const response = await axios.post<any>(BASE_URL_API + endpoint, body, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const patch = async (
  endpoint: string,
  paramValue: string,
  body: IRating
) => {
  try {
    const response = await axios.patch<any>(BASE_URL_API + endpoint, body, {
      params: { value: paramValue },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteMovie = async (id: string) => {
  try {
    const response = await axios.delete(BASE_URL_API + DELETE_MOVIE, {
      params: { value: id },
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
  } catch (err) {
    console.log(err);
  }
};
