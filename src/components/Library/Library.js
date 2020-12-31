import Poster from "../Poster/Poster";

const Library = ({ movies, onAddChosenMovie }) => {
    const handleAddMovie = (movieId) => {
        onAddChosenMovie(movieId);
    }

    const createPosters = (movies) => {
        // Movies is a set not an array, sets do not have a map prototype method
        const posters = [];
        movies.forEach(movie => {
            posters.push((
                <Poster 
                    key={movie.id}
                    movieId={movie.id}  
                    img={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                    title={movie.title}
                    rating={movie.vote_average}
                    overview={movie.overview}
                    onAddMovie={handleAddMovie}/>
            ));
        });
        return posters;
    }

    const posters = createPosters(movies);

    return (
        <section className="Library">
            {posters}
        </section>
    )
}

export default Library;