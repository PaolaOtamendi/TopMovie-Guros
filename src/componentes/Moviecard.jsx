import useObtenerGeneros from "../servicios/generos";
import "./moviecard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";


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
        <div className="contain-image">
        <img className="image" src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={''} />
        </div>
        <div className="movie-stars">
            <p>{movie.popularity}
            <FontAwesomeIcon className="icon" icon={faStar} style={{color: "#e5004d",}} />
            </p>
        </div>
        <div className="movie-name">
            <p>{movie.title}</p>
        </div>
        <div className="movie-id">
            <p>{movie.id}</p>
        </div>
        <div className="movie-generos">
        {nombresGeneros(movie.genre_ids).map((genero, index) => (
                    <button key={index} className="genre-button">{genero}</button>
                ))}
        </div>
    </div>
    );
};

export default Moviecard;