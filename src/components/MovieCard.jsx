import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img className="img-fluid" src={movie.Poster} alt={movie.Title} />
    </div>
  );
};

export default MovieCard;
