import StyledLibrary from "./Library.style";
import Poster from "../Poster/Poster";
import { useEffect, useState } from "react";

const Library = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const popularMovieURL = new URL("https://api.themoviedb.org/3/movie/popular");
    popularMovieURL.search = new URLSearchParams({"api_key": process.env.REACT_APP_TMDB_KEY, "language": "en-GB"});
    const popularMovieRequest = new Request(popularMovieURL, {
        method: 'GET',
        mode: 'cors',
    });

    useEffect(() => {
        fetch(popularMovieRequest)
            .then(res => res.json())
            .then(movies => setPopularMovies(movies.results));
    }, []);

    const posters = popularMovies.map(movie => (
        <Poster 
            key={movie.id}    
            img={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}/>
    ));

    return (
        <StyledLibrary>
            {posters}
        </StyledLibrary>
    )
}

export default Library;