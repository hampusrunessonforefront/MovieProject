package se.forefront.movies_backend.storage.repo;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import se.forefront.movies_backend.storage.model.PcMovie;

import javax.transaction.Transactional;

public interface MovieRepository extends JpaRepository<PcMovie, Long> {


    PcMovie getByMovieId(String id);

    @Transactional
    void deleteByMovieId(String id);

    List<PcMovie> findByTitleStartingWithIgnoreCase(String title);

    List<PcMovie> findFirst5ByOrderByRatingDesc();

    List<PcMovie> findByGenreContains(String genre);

    @Transactional
    @Modifying
    @Query(value = "SELECT * FROM imdb_table ORDER BY RANDOM() LIMIT 5", nativeQuery = true)
    List<PcMovie> getRandomMovies();

}


