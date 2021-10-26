import React from "react";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
interface IDeleteButton {
  id: string;
  handleDelete(id: string): void;
}

export const DeleteButton = (deleteProps: IDeleteButton) => {
  return (
    <IconButton
      aria-label="delete"
      onClick={() => deleteProps.handleDelete(deleteProps.id)}
    >
      <DeleteIcon />
    </IconButton>
  );
};
