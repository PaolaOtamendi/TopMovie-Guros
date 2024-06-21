import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import "./moviemodal.css"

import useObtenerGeneros from "../servicios/generos";

const Moviemodal = ({ movie, onClose }) => {
    const generos = useObtenerGeneros();
    console.log(generos, 2);

    const nombresGeneros = (ids) => {
        return ids.map(id => {
            const genero = generos.find(g => g.id === id);
            return genero ? genero.name : 'Desconocido';
        }).slice(0,3);
    };

    return (
        <div className="contain-modal">
            <div className="contain-imagedata">
                <div className="contain-modalimage">
                    <img className="modal-image" src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={''} />
                </div>
                <div className="movie-stars">
                    <p>{movie.vote_average.toFixed(1)}
                    <FontAwesomeIcon className="icon" icon={faStar} style={{color: "#e5004d",}} />
                    </p>
                </div>
                <div className="close-button">
                    <button className="close" onClick={onClose}>X
                    
                    </button>
                </div>
            </div>
            <div className="contain-moviedata">
                <div className="parte1">
                    <div>
                        <p className="movie-name">{movie.title}</p>
                    </div>
                    <div>
                        <p className="movie-id">{movie.id}</p>
                        <div>
                            <p className="title-id">¿De que trata?</p>
                            <p className="movie-id">{movie.overview}</p>
                        </div>
                    </div>
                </div>
                <div className="parte2">
                    <div className="movie-generos">
                        {nombresGeneros(movie.genre_ids).map((genero, index) => (
                        <button key={index} className="genre-button">{genero}</button>
                        ))}
                    </div>
                    <div className="contain-average">
                        <p className="title-id">Cuéntanos ¿te gustó?</p>
                        <div className="contain-stars">Aqui van las estrellas para calificar</div>
                        <div className="contain-button">
                            <button className="button-average">Enviar Calificación</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Moviemodal;