require ('movies.json') = movies;
import fetchWithoutTimeout from './services' ;

export function fetchMovies() {
    const resolveFunction = () => movies;

    fetchWithoutTimeout(1000).then(resolveFunction);

    const moviePromise = fetchMovies();

    console.log (moviePromise.then(results));
}