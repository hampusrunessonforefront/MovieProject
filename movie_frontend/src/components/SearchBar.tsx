import React, { Fragment, useEffect, useState } from "react";
import {
  Autocomplete,
  CircularProgress,
  createFilterOptions,
  TextField,
} from "@mui/material";
import { IMovie } from "../interfaces/movieInterface";

import { useHistory } from "react-router-dom";

import { ADD_MOVIE, get, MATCHING_MOVIES, post } from "../services/restService";
import { makeStyles } from "@material-ui/core/styles";
import { AddDialog } from "./AddDialog";
import { Movie } from "@material-ui/icons";

export interface IMovieOptionType {
  id: string;
  inputValue?: string;
  title: string;
  genre: string;

  description: string;
  rating: number;
  numberOfVotes: number;
}

const filter = createFilterOptions<IMovieOptionType>();

export const SearchBar = () => {
  const history = useHistory();
  const [value, setValue] = useState<IMovie>();
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly IMovie[]>([]);
  const [inputValue, setInputValue] = useState("Movies");
  const [loading, setLoading] = useState(false);
  const [dialogValue, setDialogValue] = useState();
  const [dialogOpen, setDialogOpen] = useState(false);
  const classes = useStyles();

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

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const handleSelect = (event: any, value: any) => {
    if (value != null) {
      if (!value.id) {
        setDialogValue(value);
        setDialogOpen(true);
      } else {
        history.push({
          pathname: `/movie/${value.id}`,
        });
      }
    }

    //Route to movie page
  };
  const handleAddMovie = async (movie: IMovie) => {
    setDialogOpen(false);

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

  return (
    <>
      <Autocomplete
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        freeSolo
        classes={classes}
        id="free-solo"
        sx={{ width: 600 }}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        style={{ color: "white" }}
        value={value}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={options}
        open={open}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (options.length < 1 && params.inputValue.length > 2 && !loading) {
            filtered.push({
              inputValue: params.inputValue,
              id: "",
              title: `Add " ${params.inputValue}"?`,
              genre: "",

              description: "",
              rating: 0,
              numberOfVotes: 0,
            });
          }
          return filtered;
        }}
        onChange={(event, value) => {
          handleSelect(event, value);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Movie"
            InputProps={{
              ...params.InputProps,
              classes: classes,

              endAdornment: (
                <Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </Fragment>
              ),
            }}
          />
        )}
      />
      {dialogOpen && (
        <AddDialog
          startValues={dialogValue!}
          handleAddMovie={handleAddMovie}
          dialogOpen={dialogOpen}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

const useStyles = makeStyles((theme: any) => ({
  root: {
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.

      color: "white",
    },
  },
  inputRoot: {
    color: "white",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px

      color: "white",
      borderColor: "white",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "red",
    },
  },
}));
