package se.forefront.movies_backend.integration.movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.forefront.movies_backend.integration.BaseApiController;
import se.forefront.movies_backend.integration.movie.implementation.MovieServiceImpl;
import se.forefront.movies_backend.model.Movie;
import se.forefront.movies_backend.model.Rating;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})

@RestController
public class MovieApiController extends BaseApiController {

    private final MovieServiceImpl movieServiceImpl;

    @Autowired
    public MovieApiController(MovieServiceImpl movieServiceImpl) {
        this.movieServiceImpl = movieServiceImpl;
    }

    @GetMapping("/movie/getall")
    public List<Movie> getAllMovies() {
        return this.movieServiceImpl.getAllMovies();
    }

    @PostMapping("/movie/add")
    public String addMovie(@RequestBody Movie movie) {
        System.out.println(movie.getGenre());
        return this.movieServiceImpl.saveMovie(movie);
    }

    @GetMapping("/movie/get")
    public Movie getMovie(@RequestParam("value") String id) {
        System.out.println(id);
        return this.movieServiceImpl.getMovie(id);
    }

    @DeleteMapping("/movie/delete")
    public void deleteMovie(@RequestParam("value") String id) {
        this.movieServiceImpl.deleteMovie(id);
    }

    @PatchMapping("/movie/rating")
    public void alterRating(@RequestBody Rating rating, @RequestParam("value") String id) {
        this.movieServiceImpl.alterRating(id, rating);

    }

    @GetMapping("/movie/matchingmovies")
    public List<Movie> getMatchingMovies(@RequestParam("value") String subString) {
        return this.movieServiceImpl.getMatchingMovies(subString);
    }

    @GetMapping("/movie/topratedmovies")
    public List<Movie> getTopRatedMovies() {
        return this.movieServiceImpl.getTopRatedMovies();
    }


    @GetMapping("/movie/bygenre")
    public List<Movie> getMoviesByGenre(@RequestParam("value") String genre) {
        return this.movieServiceImpl.getMoviesByGenre(genre);
    }


    @GetMapping("/movie/random")
    public List<Movie> getRandomMoviesByGenre() {
        //DEN ÄR ÄR PAJ
        return this.movieServiceImpl.getRandomMovies();
    }
}
