import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Carousel, Spinner } from 'react-bootstrap'; 

const MovieGallery = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://www.omdbapi.com/?apikey=4ae9e1fb&s=${searchTerm}`);
        
        
        if (!response.ok) {
          throw new Error('Errore durante il caricamento dei dati.');
        }

        const data = await response.json();
        
        
        if (data.Response === 'False') {
          throw new Error('Nessun film trovato per questa ricerca.');
        }

        setMovies(data.Search || []);
        setLoading(false);  
      } catch (error) {
        setLoading(false);
        setError(error.message);  
      }
    };

    fetchMovies();
  }, [searchTerm]);

  const chunkMovies = (movies, chunkSize) => {
    const result = [];
    for (let i = 0; i < movies.length; i += chunkSize) {
      result.push(movies.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedMovies = chunkMovies(movies, 6);

  if (loading) {
    return (
      <div className="loader">
        
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
      </div>
    );
  }

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
