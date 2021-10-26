package se.forefront.movies_backend.storage.repo;

import se.forefront.movies_backend.model.Movie;

public interface Repository<T> {
    void save(T t);
    void delete(String id);
    T find(String id);
}
