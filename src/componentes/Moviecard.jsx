import useObtenerGeneros from "../servicios/generos";

const Moviecard = ({ movie }) => {
    const generos = useObtenerGeneros();
    console.log(generos, 2);

    const nombresGeneros = (ids) => {
        return ids.map(id => {
            const genero = generos.find(g => g.id === id);
            return genero ? genero.name : 'Desconocido';
        });
    };

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
        <div>
        <p>{nombresGeneros(movie.genre_ids)}</p>
        </div>
    </div>
    );
};

export default Moviecard;