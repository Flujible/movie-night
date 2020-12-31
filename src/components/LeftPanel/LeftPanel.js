import { useState, useEffect } from "react";

const LeftPanel = ({ chosenMovies }) => {
    const [movies, setMovies] = useState([]);

    const makeMoviesArray = (chosenMovies) => {
        return chosenMovies.map(movie => <p key={movie}>{movie}</p>)
    }

    useEffect(() => {
        setMovies(makeMoviesArray(chosenMovies));
    }, [chosenMovies]);

    return (
        <section className="LeftPanel">
            <h2>My night</h2>
            {movies}
        </section>
    );
}

export default LeftPanel;