import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { SearchBar } from "./SearchBar";
import { Grid } from "@mui/material";
type Props = {
  onMenuClick: () => void;
};

export const Navbar = ({ onMenuClick }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Grid item>
            <IconButton
              onClick={onMenuClick}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h4" color="initial">
              RottenBananas
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.search}>
              <SearchBar />
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    search: {},
  })
);
