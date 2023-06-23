import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './MovieTable.css';

const MovieTable = ({ category }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?api_key=be74cc81c2451ebbfea1d1e7e7b37d56`
        );
        setMovieData(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [category]);

  return (
    <table className="movie-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Release Date</th>
          <th>Vote Average</th>
        </tr>
      </thead>
      <tbody>
        {movieData.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.title}</td>
            <td>{movie.release_date}</td>
            <td>{movie.vote_average}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('now_playing');

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="app-container">
      <h1>Movie Categories</h1>
      <div className="tabs-container">
        <button
          className={activeTab === 'now_playing' ? 'active-tab' : ''}
          onClick={() => handleTabClick('now_playing')}
        >
          Now Playing
        </button>
        <button
          className={activeTab === 'popular' ? 'active-tab' : ''}
          onClick={() => handleTabClick('popular')}
        >
          Popular
        </button>
        <button
          className={activeTab === 'upcoming' ? 'active-tab' : ''}
          onClick={() => handleTabClick('upcoming')}
        >
          Upcoming
        </button>
      </div>
      <MovieTable category={activeTab} />
    </div>
  );
};

export default App;
