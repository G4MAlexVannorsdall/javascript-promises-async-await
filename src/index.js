import {fetchMovies, fetchBooks} from './services';
import {fetchWithTimeout} from './services' ;
const movies = require('./data/movies.json');

export function getBooksAndMovies() {
     return Promise.all([fetchBooks(), fetchMovies()]).then(([books, movies ]) => ({
        books,
        movies
      }))
      .catch(error => console.log("Error fetching books and movies", error));
}

const getBooksAndMoviesPromise = getBooksAndMovies();

return getBooksAndMoviesPromise.then(results () => {
    console.log('getBooksAndMoviesPromise', results);
});