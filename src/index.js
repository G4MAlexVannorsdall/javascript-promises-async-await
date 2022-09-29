import {fetchWithTimeout} from './services' ;
const movies = require('./data/movies.json');

export function fetchMovies() {

    return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
const resolveFunction = () => movies;

console.log (moviePromise.then(results));