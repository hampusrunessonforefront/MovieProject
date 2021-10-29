package se.forefront.movies_backend.integration.movie.implementation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import se.forefront.movies_backend.integration.movie.api.MovieService;
import se.forefront.movies_backend.model.Movie;
import se.forefront.movies_backend.model.Rating;
import se.forefront.movies_backend.storage.mapper.StorageMapper;
import se.forefront.movies_backend.storage.model.PcMovie;
import se.forefront.movies_backend.storage.repo.MovieRepository;

import java.util.List;
import java.util.UUID;

@Service
public class MovieServiceImpl implements MovieService {


    private final MovieRepository movieRepository;

    StorageMapper storageMapper = new StorageMapper();

    @Autowired
    public MovieServiceImpl(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    @Override
    public List<Movie> getAllMovies() {
        return storageMapper.map(movieRepository.findAll());
    }

    @Override
    public void deleteMovie(String id) {
        movieRepository.deleteByMovieId(id);
    }

    @Override
    public Movie getMovie(String id) {
        return storageMapper.map(movieRepository.getByMovieId(id));
    }

    @Override
    public String saveMovie(Movie movie) {
        if (movie.getId() == null || movie.getId().isBlank()) {
            movie.setId(UUID.randomUUID().toString());
        }

        movieRepository.save(storageMapper.map(movie));
        return movie.getId();
    }

    @Override
    public void alterRating(String id, Rating rating) {
        PcMovie pcMovie = movieRepository.getByMovieId(id);
        pcMovie.setRating(rating.getRating());
        pcMovie.setNumberOfVotes((rating.getNumberOfVotes()));
        movieRepository.save(pcMovie);

    }

    @Override
    public List<Movie> getMatchingMovies(String subString) {
        return storageMapper.map(movieRepository.findByTitleStartingWithIgnoreCase(subString));
    }

    @Override
    public List<Movie> getTopRatedMovies() {
        return storageMapper.map(movieRepository.findFirst5ByOrderByRatingDesc());
    }

    @Override
    public List<Movie> getMoviesByGenre(String Genre) {
        return storageMapper.map(movieRepository.findByGenreContains(Genre));
    }

    @Override
    public List<Movie> getRandomMovies() {
        System.out.println("HELLOAAsDAsd");
        return storageMapper.map(movieRepository.getRandomMovies());
    }
}
