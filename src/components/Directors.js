import React from 'react';
import { directors } from '../data';

const CreateDirectors = (data) => {
  return data.directors.map(director => {
    return (
      <div key={director.name} className="director">
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>

    )
  })
}


const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <CreateDirectors directors={directors} />
    </div>
  );
}

export default Directors
