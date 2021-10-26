import React, { useEffect, useState } from "react";
import { IMovie } from "../interfaces/movieInterface";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { IMovieOptionType } from "./SearchBar";

interface IDialog {
  startValues: IMovieOptionType;
  handleAddMovie(movie: IMovie): void;
  dialogOpen: boolean;
  handleClose(): void;
}

export const AddDialog = (props: IDialog) => {
  const [dialogValue, setDialogValue] = useState<IMovie>();
  const [error, setError] = useState({
    title: false,
    description: false,
    genre: false,
  });

  useEffect(() => {
    setDialogValue({
      ...dialogValue!,
      title: props.startValues.inputValue!,
    });
  }, [props.startValues]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.handleAddMovie({
      id: "",
      title: dialogValue!.title,
      description: dialogValue!.description,
      genre: dialogValue!.genre,
      rating: 0,
      numberOfVotes: 0,
    });
  };
  return (
    <Dialog open={props.dialogOpen} onClose={props.handleClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add a new film</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Did you miss any film in our list? Please, add it!
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            value={dialogValue?.title}
            onChange={(event) =>
              setDialogValue({
                ...dialogValue!,
                title: event.target.value,
              })
            }
            label="Title"
            type="text"
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="name"
            onChange={(event) =>
              setDialogValue({
                ...dialogValue!,
                description: event.target.value,
              })
            }
            label="Description"
            type="text"
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="name"
            onChange={(event) =>
              setDialogValue({
                ...dialogValue!,
                genre: event.target.value,
              })
            }
            label="Genre"
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
