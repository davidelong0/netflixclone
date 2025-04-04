import React from 'react';
import NavbarComponent from './components/Navbar';
import MovieGallery from './components/MovieGallery';
import Footer from './components/Footer';
import CategoryHeader from './components/CategoryHeader'; 
import './App.css'; 

const App = () => {
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

