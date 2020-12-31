import { useState, useEffect } from "react";
import { ReactComponent as Cross } from './cross.svg';

const LeftPanel = ({ chosenMovies, onRemove }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const handleRemove = (movie, e) => {
            onRemove(movie);
        }

        const makeMoviesArray = (chosenMovies) => {
            return chosenMovies.map(movie => (
                <div 
                    key={movie.id}
                    className="movie-item">
                    <p className="movie-title">{movie.title}</p>
                    <button 
                        className="remove-movie"
                        onClick={(e) => handleRemove(movie, e)}>
                        <Cross alt={`Remove ${movie.title} from list`}/>
                    </button>
                </div>
            ))
        }

        setMovies(makeMoviesArray(chosenMovies));
    }, [chosenMovies, onRemove]);

    return (
        <section className="LeftPanel">
            <h2>My night</h2>
            {movies}
        </section>
    );
}

export default LeftPanel;