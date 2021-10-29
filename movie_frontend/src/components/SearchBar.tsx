import { Fragment, useState } from "react";
import {
  Autocomplete,
  CircularProgress,
  createFilterOptions,
  TextField,
} from "@mui/material";
import { IMovieOptionType } from "../interfaces/movieInterface";

import { makeStyles } from "@material-ui/core/styles";
import { AddDialog } from "./AddDialog";
import { useMovies } from "./SearchBarHook";

const filter = createFilterOptions<IMovieOptionType>();

export const SearchBar = () => {
  const {
    value,
    options,
    loading,
    dialogValue,
    dialogOpen,
    handleSelect,
    handleAddMovie,
    handleClose,
    handleNewInput,
  } = useMovies();

  const [open, setOpen] = useState(false);

  const classes = useStyles();

  // useEffect(() => {
  //   if (!open) {
  //     setOptions([]);
  //   }
  // }, [open]);

  return (
    <>
      <Autocomplete
        classes={classes}
        id="blur-on-select"
        freeSolo
        blurOnSelect
        clearOnBlur
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
              title: `Add "${params.inputValue}"?`,
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
          handleNewInput(newInputValue);
        }}
        renderOption={(params, option) => {
          return (
            <span {...params} style={{ fontFamily: "Josefin Sans, cursive" }}>
              <img
                src={option.imageUrl}
                width="50px"
                style={{ paddingRight: "20px" }}
                alt="err"
              />{" "}
              {option.title}
            </span>
          );
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
            style={{ fontFamily: "Josefin Sans, cursive" }}
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
