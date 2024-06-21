import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { Rating } from '@mui/material';
import Swal from 'sweetalert2';
import "./moviemodal.css"

import useObtenerGeneros from "../servicios/generos";
import { useState } from "react";

const Moviemodal = ({ movie, onClose }) => {
    const generos = useObtenerGeneros();
    const [rating, setRating] = useState(0);

    const nombresGeneros = (ids) => {
        return ids.map(id => {
            const genero = generos.find(g => g.id === id);
            return genero ? genero.name : 'Desconocido';
        }).slice(0,3);
    };

    const handleRatingChange = (e, newRating) => {
        setRating(newRating);
    };

    const handleSendRating = () => {
        if(rating >0) {
        Swal.fire({
            text: 'Tu calificación se registró correctamente',
            icon: 'success',
            confirmButtonText: 'X',
            customClass: {
                container: 'my-swal-container',
                popup: 'my-swal-popup',
                icon: 'my-swal-icon',
                text: 'my-swal-text',
                confirmButton: 'swal2-confirm',
            }
        });
    } else {
        Swal.fire({
            text: 'Por favor selecciona un rating antes de enviar la calificación',
            icon: 'warning',
            confirmButtonText: 'OK',
            customClass: {
                container: 'my-swal-container',
                popup: 'my-swal-popup',
                icon: 'my-swal-icon',
                text: 'my-swal-text',
                confirmButton: 'swal2-confirm',
            }
        });
        }
    };

    return (
        <div className="contain-modal">
            <div className="contain-imagedata">
                <div className="contain-modalimage">
                    <img className="modal-image" src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={''} />
                </div>
                <div className="movie-aver">
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
                        <div className="title-container">
                        <p className="title-id">Cuéntanos ¿te gustó?</p>
                        </div>
                        <div className="contain-stars">
                            <Rating
                            className="stars"
                            name="movie-rating"
                            value={rating}
                            onChange={handleRatingChange}
                            precision={0.5}
                            icon={<FontAwesomeIcon icon={faStar} style={{ color: '#E5004D', fontSize: '40px' }} />}
                            emptyIcon={<FontAwesomeIcon icon={faStar} style={{ color: '#ddd', fontSize: '40px' }} />}
                            />
                            </div>
                        <div className="contain-button">
                            <button className="button-average" onClick={handleSendRating}>Enviar Calificación</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Moviemodal;