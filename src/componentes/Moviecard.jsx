const Moviecard = ( {movie} ) => {
    return(
    <div className="movie-card">
        <div className="image">
        <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={''} />
        </div>
        <div>
            <p>{movie.popularity}</p>
        </div>
        <div className="name">
            <p>{movie.title}</p>
        </div>
        <div className="id">
            <p>{movie.id}</p>
        </div>
    </div>
    );
};

export default Moviecard;