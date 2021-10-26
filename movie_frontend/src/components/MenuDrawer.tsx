import React from "react";
import {
  Home as HomeIcon,
  List as ListIcon,
  FormatListNumbered as RatingIcon,
} from "@material-ui/icons";
import {
  Drawer,
  Grid,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { HomePage } from "./HomePage";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  list: { width: 250 },
  item: {
    color: "#FFFFF",
  },
});
type MenuItem = {
  icon?: React.ReactElement;
  name: string;
  route: string;
};

type Props = {
  open: boolean;
  toggleOpen: () => void;
};

const menuItem: MenuItem[] = [
  {
    name: "Home",
    route: "/",

    icon: <HomeIcon />,
  },
  {
    name: "Browse",
    route: "/movies/browse",

    icon: <ListIcon />,
  },
  {
    name: "Top rated movies",
    route: "/movies/topmovies",
    icon: <RatingIcon />,
  },
];
export const MenuDrawer = ({ open, toggleOpen }: Props) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <Drawer open={open} onClose={toggleOpen}>
          <div className={classes.list}>
            <List>
              {menuItem.map((item) => (
                <ListItem
                  onClick={toggleOpen}
                  key={item.name}
                  button={true}
                  divider={true}
                  component={Link}
                  to={item.route}
                >
                  <ListItemIcon>
                    <Icon>{item.icon}</Icon>
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </Grid>
    </Grid>
  );
};
