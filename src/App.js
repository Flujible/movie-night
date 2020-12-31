import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import Library from './components/Library/Library';

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [chosenMovies, setChosenMovies] = useState([]);

  const handleAddChosenMovie = (movie) => {
    const isExisting = chosenMovies.find(chosenMovie => chosenMovie === movie);
    if (!isExisting) {
      setChosenMovies([...chosenMovies, movie]);
    }
  }

  useEffect(() => {
    const popularMovieURL = new URL("https://api.themoviedb.org/3/movie/popular");
    popularMovieURL.search = new URLSearchParams({"api_key": process.env.REACT_APP_TMDB_KEY, "language": "en-GB"});
    const popularMovieRequest = new Request(popularMovieURL, {
        method: 'GET',
        mode: 'cors',
    });
    fetch(popularMovieRequest)
        .then(res => res.json())
        .then(movies => setPopularMovies(movies.results));
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className="content" role="main">
        <LeftPanel
          chosenMovies={chosenMovies}/>
        <Library
          movies={popularMovies}
          onAddChosenMovie={handleAddChosenMovie}/>
      </div>
    </div>
  );
}

export default App;
