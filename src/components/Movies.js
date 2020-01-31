import React from 'react';
import { movies } from '../data';

const CreateMovies = (data) => {
  return data.movies.map(movie => {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <h3>{movie.time}</h3>
        <ul>
          {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )
  })
}


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <CreateMovies movies={movies} />
    </div>
  );
};

export default Movies;
