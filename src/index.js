import {fetchMovies, fetchBooks} from './services';
import {fetchWithTimeout} from './services' ;
const movies = require('./data/movies.json');

export function getBooksAndMovies() {
    Promise.all([fetchBooks(), fetchMovies()]).then(([books, movies ]) => ({
        books,
        movies
      }))
      .catch(error => console.log("Error fetching books and movies", error));

}