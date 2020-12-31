import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import LeftPanel from './components/LeftPanel/LeftPanel';
import Library from './components/Library/Library';

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [chosenMovies, setChosenMovies] = useState([]);
  const [lastPageRequested, setLastPageRequested] = useState(1);

  const handleAddChosenMovie = (movie) => {
    const isExisting = chosenMovies.find(chosenMovie => chosenMovie.id === movie.id);
    if (!isExisting) {
      setChosenMovies([...chosenMovies, movie]);
    }
  }

  const handleRemoveMovie = (movie) => {
    const movieIndex = chosenMovies.indexOf(movie);
    chosenMovies.splice(movieIndex, 1);
    setChosenMovies([...chosenMovies]);
  }

  const handleLoadMoreMovies = () => {
    const nextPage = lastPageRequested + 1
    requestMovies(nextPage)
      .then(res => res.json())
      .then(movies => setPopularMovies([...popularMovies, ...movies.results]))
    setLastPageRequested(nextPage);
  }

  const requestMovies = (pageNo) => {
    const popularMovieURL = new URL("https://api.themoviedb.org/3/movie/popular");
    popularMovieURL.search = new URLSearchParams({"api_key": process.env.REACT_APP_TMDB_KEY, "language": "en-GB", page: pageNo});
    const popularMovieRequest = new Request(popularMovieURL, {
        method: 'GET',
        mode: 'cors',
    });
    return fetch(popularMovieRequest)
  }

  useEffect(() => {
    requestMovies(lastPageRequested)
      .then(res => res.json())
      .then(movies => setPopularMovies([...popularMovies, ...movies.results]));
  }, []);

  return (
    <div className="App">
      <Header/>
      <div className="content" role="main">
        <LeftPanel
          chosenMovies={chosenMovies}
          onRemove={handleRemoveMovie}/>
        <Library
          movies={popularMovies}
          onAddChosenMovie={handleAddChosenMovie}
          onLoadMoreMovies={handleLoadMoreMovies}/>
      </div>
    </div>
  );
}

export default App;
