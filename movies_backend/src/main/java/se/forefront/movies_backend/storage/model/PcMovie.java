package se.forefront.movies_backend.storage.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "imdb_table")
public class PcMovie {

    @Id
    @GeneratedValue
    private Long surrogateId;

    private String movieId;
    private String title;
    private String genre;
    private String description;
    private String imageUrl;
    private String runtime;
    private String gross;
    private String director;
    private int releaseYear;
    private double rating;
    private int numberOfVotes;

    public PcMovie() {
    }

    public String getRuntime() {
        return runtime;
    }

    public void setRuntime(String runtime) {
        this.runtime = runtime;
    }

    public String getGross() {
        return gross;
    }

    public void setGross(String gross) {
        this.gross = gross;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }


    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public int getNumberOfVotes() {
        return numberOfVotes;
    }

    public void setNumberOfVotes(int numberOfVotes) {
        this.numberOfVotes = numberOfVotes;
    }
}

 /* CREATE TABLE imdb_table (
        surrogate_id serial NOT NULL,
        movie_id VARCHAR(255) NOT NULL,
    title varchar(255) NOT NULL,
    genre varchar(255),
    image_url varchar(255),
    description TEXT,
    release_year INT8,
    runtime varchar(255),
    director varchar(255),
    rating NUMERIC(12, 6),
    number_of_votes INT8,
    gross varchar(255),
    PRIMARY KEY (surrogate_id)
);*/

/*
    copy imdb_table(movie_id, title, genre, image_url, description, release_year, runtime, director, rating, number_of_votes, gross)
    from '/Users/hampus.runesson/Desktop/imdb_movies.csv'
    delimiter ';' csv header;*/
