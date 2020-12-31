const Poster = ({ img, title, rating, overview }) => {
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
                        <button className="add-to-list">Add to my list</button>
                    </div>
                </div>
        </div>
    )
}

export default Poster;