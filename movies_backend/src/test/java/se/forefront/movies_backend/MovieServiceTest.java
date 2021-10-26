package se.forefront.movies_backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.forefront.movies_backend.integration.movie.api.MovieService;
import se.forefront.movies_backend.model.Movie;
import se.forefront.movies_backend.model.Rating;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class MovieServiceTest {

    @Autowired
    private MovieService movieService;

    @Test
    void getAllMovies() {
        List<Movie> movies = movieService.getAllMovies();
        assertEquals(0, movies.size());
    }


    @Test
    void addMovie() {
        Movie movie = new Movie();
        movieService.saveMovie(movie);
        assertEquals(1, movieService.getAllMovies().size());
    }

    @Test
    void testAddAndDelete() {
        Movie movie = new Movie();
        movie.setId("qwerty");
        movieService.saveMovie(movie);
        assertEquals(1, movieService.getAllMovies().size());
        movieService.deleteMovie("1");
        assertEquals(0, movieService.getAllMovies().size());
    }

    @Test
    void alterRating() {
        Movie movie = new Movie();
        Rating rating = new Rating();
        rating.setRating(2);
        movie.setRating(10);
        movie.setNumberOfVotes(1);
        movieService.saveMovie(movie);
        movieService.alterRating("1", rating);
        assertEquals(6, movieService.getMovie("1").getRating());

    }


}
