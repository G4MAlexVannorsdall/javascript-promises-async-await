import {fetchMovies, fetchBooks} from './services';
import {fetchWithTimeout} from './services' ;
const movies = require('./data/movies.json');

const moviePromise = fetchMovies();


moviePromise.then(results => {
    console.log(results);
});

export function getBooksAndMovies() {
    Promise.all([fetchBooks(), fetchMovies()]).then(([books, movies ]) => ({
        books,
        movies
      }))
      .catch(error => console.log("Error fetching books and movies", error));

}