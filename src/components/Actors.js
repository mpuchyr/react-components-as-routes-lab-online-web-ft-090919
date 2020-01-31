import React from 'react';
import { actors } from '../data';

const CreateActors = (data) => {
  return data.actors.map(actor => {
    return (
      <div key={actor.name} className="actor">
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    )
  })
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <CreateActors actors={actors} />
    </div>
  );
};

export default Actors;
