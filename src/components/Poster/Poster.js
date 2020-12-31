const Poster = ({ img, title, rating, overview }) => {
    return (
        <div
            className="Poster"
            style={{backgroundImage: `url(${img})`}}>
        </div>
    )
}

export default Poster;