import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import { MoviePage } from "./components/MoviePage/MoviePage";
import { NavbarAndMenuDrawer } from "./components/NavBarAndMenuDrawer";
import { ThemeProvider } from "@mui/material";

import { createTheme } from "@mui/material/styles";
import { AllMoviesPage } from "./components/AllMoviesPage/AllMoviesPage";
import { TopRatedPage } from "./components/TopRatedPage/TopRatedPage";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/movie/:movieId" exact component={MoviePage} />
    <Route path="/movies/browse" exact component={AllMoviesPage} />
    <Route path="/movies/topmovies" exact component={TopRatedPage} />
  </Switch>
);

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavbarAndMenuDrawer />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
