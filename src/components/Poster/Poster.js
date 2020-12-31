const Poster = ({ movieId, img, title, rating, overview, onAddMovie }) => {
    
    const handleClick = (event) => {
        const chosenMovie = event.target.id;
        onAddMovie(chosenMovie);
    }

    return (
        <div
            className="Poster"
            style={{backgroundImage: `url(${img})`}}>
                <div className="overlay">
                    <h3>{title}</h3>
                    <p className="rating">{rating} out of 10</p>
                    <div className="overview-container">
                        <p className="overview">{overview}</p>
                    </div>
                    <div className="button-container">
                        <button 
                            className="add-to-list"
                            id={movieId}
                            onClick={handleClick}>Add to my list</button>
                    </div>
                </div>
        </div>
    )
}

export default Poster;