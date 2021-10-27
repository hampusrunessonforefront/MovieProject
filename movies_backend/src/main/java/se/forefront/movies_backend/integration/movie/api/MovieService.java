package se.forefront.movies_backend.integration.movie.api;

import se.forefront.movies_backend.model.Movie;
import se.forefront.movies_backend.model.Rating;

import java.util.List;

public interface MovieService {

    List<Movie> getAllMovies();

    void deleteMovie(String id);

    Movie getMovie(String id);

    String saveMovie(Movie movie);

    void alterRating(String id, Rating rating);

    List<Movie> getMatchingMovies(String subString);

    List<Movie> getTopRatedMovies();

    List<Movie> getMoviesByGenre(String Genre);
}
