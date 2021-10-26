package se.forefront.movies_backend.storage.repo.database;

import org.springframework.stereotype.Repository;
import se.forefront.movies_backend.model.Movie;
import se.forefront.movies_backend.storage.repo.MovieRepository;


import java.util.*;

/*@Repository
public class InMemoryDatabse implements MovieRepository {

    HashMap<String, Movie> stupidDb;
    Integer sequence;

    public InMemoryDatabse() {
        this.stupidDb = new HashMap<>();
        this.sequence = 0;
        Movie movie1 = new Movie();
        movie1.setTitle("Iron Man 1");
        movie1.setDescription("Flying around in a suit made of iron");
        movie1.setRating(10);
        movie1.setNumberOfVotes(1);

        Movie movie2 = new Movie();
        movie2.setTitle("Avengers Endgame");
        movie2.setDescription("Killing aliens");
        movie2.setRating(8);
        movie2.setNumberOfVotes(7);

        Movie movie3 = new Movie();
        movie3.setTitle("Iron Man 2");
        movie3.setDescription("ASKDJLASdj");
        movie3.setRating(9);
        movie3.setNumberOfVotes(1);

        save(movie1);
        save(movie2);
        save(movie3);

    }

    @Override
    public void save(Movie movie) {
        if (stupidDb.get(movie.getId()) == null || movie.getId().isBlank()) {
            sequence++;
            movie.setId(Integer.toString(sequence));
        }
        stupidDb.put(movie.getId(), movie);
    }

    @Override
    public void delete(String id) {
        stupidDb.remove(id);
    }

    @Override
    public Movie find(String id) {
        return stupidDb.get(id);
    }

    @Override
    public List<Movie> getAllMovies() {

        return new ArrayList<Movie>(stupidDb.values());
    }

    @Override
    public List<Movie> getAllMatchingMovies(String subString) {
        List<Movie> resultArr = new ArrayList<>();
        for (Movie movie : stupidDb.values()) {
            if (movie.getTitle().toLowerCase().startsWith(subString.toLowerCase())) {
                resultArr.add(movie);
            }
        }
        return resultArr;

    }


    public List<Movie> getTopRatedMovies() {
        List<Movie> result = new ArrayList<>();
        Movie lowestRating = new Movie();
        lowestRating.setRating(0);
        for (Movie movie : stupidDb.values()) {
            if (result.size() < 20 || movie.getRating() > lowestRating.getRating()) {
                if (result.size() >= 20) {
                    result.remove(lowestRating);
                }
                result.add(movie);
                lowestRating = result.stream().min(Comparator.comparing(Movie::getRating)).get();
            }
        }
        return result;
    }
}*/
/*
 *
 * h2 databas
 *spring data
 * postgresql
 * crudrepository
 * uuid
 *
 * */