import React, { useState, useEffect } from 'react';
import NavbarComponent from './components/Navbar';
import MovieGallery from './components/MovieGallery';
import Footer from './components/Footer';
import CategoryHeader from './components/CategoryHeader';
import { Spinner, Alert } from 'react-bootstrap'; 
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAPIConnection = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://www.omdbapi.com/?apikey=4ae9e1fb&s=Test`);

        if (!response.ok) {
          throw new Error('Errore di connessione al server.');
        }

        const data = await response.json();

        if (data.Response === 'False') {
          throw new Error('API non disponibile o chiave non valida.');
        }

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };

    checkAPIConnection();
  }, []);

  if (loading) {
    return (
      <div className="loader d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container text-center mt-5">
        <Alert variant="danger">
          <strong>Errore:</strong> {error}
        </Alert>
      </div>
    );
  }

  return (
    <div className="App">
      <NavbarComponent />
      
      {/* sottonav */}
      <CategoryHeader title="TV Shows" />
      
      {/* Gallerie */}
      <MovieGallery searchTerm="Pokèmon" />
      <MovieGallery searchTerm="One Piece" />
      <MovieGallery searchTerm="Sonic" />
      
      <Footer />
    </div>
  );
};

export default App;
