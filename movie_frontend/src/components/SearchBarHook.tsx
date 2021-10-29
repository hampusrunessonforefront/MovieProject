import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { IMovie, IMovieOptionType } from "../interfaces/movieInterface";
import { ADD_MOVIE, get, MATCHING_MOVIES, post } from "../services/restService";

export const useMovies = () => {
  const [value] = useState<IMovie>();
  const [options, setOptions] = useState<readonly IMovie[]>([]);
  const [inputValue, setInputValue] = useState("Movies");
  const [loading, setLoading] = useState(false);
  const [dialogValue, setDialogValue] = useState<IMovieOptionType>();
  const [dialogOpen, setDialogOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let active = true;

    if (inputValue.length < 3) {
      // setOptions(value ? [value] : []);

      setOptions([]);
      return undefined;
    }

    const getMovies = async () => {
      setLoading(true);

      await get(MATCHING_MOVIES, inputValue).then((data) => {
        if (active) {
          setOptions(data === undefined ? [] : data);
        }
        setLoading(false);
      });
    };
    getMovies();
    return () => {
      active = false;
    };
  }, [value, inputValue]);

  const handleSelect = (event: any, movie: any) => {
    if (movie) {
      if (!movie.id) {
        setDialogValue(movie);
        setDialogOpen(true);
      } else {
        history.push({
          pathname: `/movie/${movie.id}`,
        });
      }
    }
    //Route to movie page
  };
  const handleAddMovie = async (movie: IMovie) => {
    setDialogOpen(false);

    console.log(movie);

    await post(ADD_MOVIE, movie).then((data) => {
      console.log("sadfsadfsadf");

      history.push({
        pathname: `/movie/${data}`,
      });
    });
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleNewInput = (input: string) => {
    setInputValue(input);
  };

  return {
    value,
    options,
    loading,
    dialogValue,
    dialogOpen,
    handleSelect,
    handleAddMovie,
    handleClose,
    handleNewInput,
  };
};
