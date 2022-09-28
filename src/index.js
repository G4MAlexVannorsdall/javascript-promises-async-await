import { fetchWithoutTimeout }  from './services' ;
const movies = require('./data/movies.json');

export function fetchMovies() {
    const resolveFunction = () => movies;

    fetchWithoutTimeout(1000).then(resolveFunction);

    const moviePromise = fetchMovies();

    console.log (moviePromise.then(results));
}