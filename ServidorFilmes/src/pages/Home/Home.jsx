import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Genres from '../../components/Genres/Genres';
import RecentMovies from '../../components/RecentMovies/RecentMovies';
import FeaturedMovies from '../../components/FeaturedMovies/FeaturedMovies'
import Footer from '../../components/Footer/Footer';
import '../../App.css';

function Home() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <FeaturedMovies/>
      <Genres />
      <RecentMovies />
      <Footer />
    </div>
  );
}

export default Home;
