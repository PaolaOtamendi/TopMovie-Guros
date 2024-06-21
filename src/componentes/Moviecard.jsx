import useObtenerGeneros from "../servicios/generos";
import "./moviecard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";


const Moviecard = ({ movie, onClick }) => {
    const generos = useObtenerGeneros();

    const nombresGeneros = (ids) => {
        return ids.map(id => {
            const genero = generos.find(g => g.id === id);
            return genero ? genero.name : 'Desconocido';
        }).slice(0,3);
    };

    return(
    <div className="movie-card" onClick={onClick}>
        <div className="contain-image">
        <img className="image" src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={''} />
        </div>
        <div className="movie-stars">
            <p>{movie.vote_average.toFixed(1)}
            <FontAwesomeIcon className="icon" icon={faStar} style={{color: "#e5004d",}} />
            </p>
        </div>
        <div className="contain-text">
        <div className="contain-titles">
            <p className="movie-name">{movie.title}</p>
            <p className="movie-id">{movie.id}</p>
        </div>
        <div className="movie-generos">
        {nombresGeneros(movie.genre_ids).map((genero, index) => (
                    <button key={index} className="genre-button">{genero}</button>
                ))}
        </div>
        </div>
    </div>
    );
};

export default Moviecard;