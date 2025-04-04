import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Carousel } from 'react-bootstrap';

const MovieGallery = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=4ae9e1fb&s=${searchTerm}`);
      const data = await response.json();
      setMovies(data.Search || []);
      setLoading(false);
    };

    fetchMovies();
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  
  const chunkMovies = (movies, chunkSize) => {
    const result = [];
    for (let i = 0; i < movies.length; i += chunkSize) {
      result.push(movies.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedMovies = chunkMovies(movies, 6); 

  return (
    <div className='p-2'>
      <h4>{searchTerm} Movies</h4>
      <Carousel>
        {chunkedMovies.map((chunk, index) => (
          <Carousel.Item key={index} style={{ width: "100%" }}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-0">
              {chunk.map((movie) => (
                <div key={movie.imdbID} className="col mb-2 text-center px-1">
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieGallery;
