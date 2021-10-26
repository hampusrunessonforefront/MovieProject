package se.forefront.movies_backend.storage.mapper;

import se.forefront.movies_backend.model.Movie;
import se.forefront.movies_backend.storage.model.PcMovie;

import java.util.ArrayList;
import java.util.List;

public class StorageMapper {

    public PcMovie map(Movie movie) {
        PcMovie pcMovie = new PcMovie();
        pcMovie.setMovieId(movie.getId());
        pcMovie.setTitle((movie.getTitle()));
        pcMovie.setGenre(movie.getGenre());
        pcMovie.setDescription(movie.getDescription());
        pcMovie.setImageUrl(movie.getImageUrl());
        pcMovie.setRating(movie.getRating());
        pcMovie.setNumberOfVotes(movie.getNumberOfVotes());
        pcMovie.setReleaseYear(movie.getReleaseYear());
        pcMovie.setRuntime(movie.getRuntime());
        pcMovie.setDirector(movie.getDirector());
        pcMovie.setGross(movie.getGross());

        return pcMovie;
    }

    public Movie map(PcMovie pcMovie) {
        Movie movie = new Movie();
        movie.setId(pcMovie.getMovieId());
        movie.setTitle(pcMovie.getTitle());
        movie.setGenre(pcMovie.getGenre());
        movie.setDescription(pcMovie.getDescription());
        movie.setImageUrl(pcMovie.getImageUrl());
        movie.setRating(pcMovie.getRating());
        movie.setNumberOfVotes(pcMovie.getNumberOfVotes());
        movie.setReleaseYear(pcMovie.getReleaseYear());
        movie.setRuntime(pcMovie.getRuntime());
        movie.setDirector(pcMovie.getDirector());
        movie.setGross(pcMovie.getGross());

        return movie;
    }

    public List<Movie> map(List<PcMovie> pcMovies) {
        ArrayList<Movie> result = new ArrayList<>();
        for (PcMovie pcMovie : pcMovies) {
            result.add(map(pcMovie));
        }
        return result;
    }
}
