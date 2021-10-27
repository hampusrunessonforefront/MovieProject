package se.forefront.movies_backend.storage.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import se.forefront.movies_backend.storage.model.PcMovie;

import javax.transaction.Transactional;

public interface MovieRepository extends JpaRepository<PcMovie, Long> {


    PcMovie getByMovieId(String id);

    @Transactional
    void deleteByMovieId(String id);

    List<PcMovie> findByTitleStartingWithIgnoreCase(String title);

    List<PcMovie> findFirst20ByOrderByRatingDesc();

    List<PcMovie> findByGenreContains(String genre);

}


