import { Header } from "../componentes/Header";
import "./home.css"
import Moviecard from '../componentes/Moviecard';
import Moviemodal from '../componentes/Moviemodal';

import useObtenerMovies from "../servicios/movies";
import { useState } from "react";

const Home = () => {

    const movies = useObtenerMovies();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const moviesPerPage = 5;

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirsttMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirsttMovie, indexOfLastMovie);

    const handleNext = () => {
        if(indexOfLastMovie < movies.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleOpenModal= (movie) => {
        setSelectedMovie(movie);
        setModalOpen(true);
    }

    const handleCloseModal = () => {
        setSelectedMovie(null);
        setModalOpen(false);
    };


    return(
        <section className="contain-all">
        <Header />
        <div className="contain-general">
            <div className="contain-intro">
                <h1 className="title">Top movies en Guros</h1>
                <p className="introtext">Pirate ipsum arrgh bounty warp jack. Red keelhaul 
                    spirits on avast. Topsail chase pirate lanyard mizzen 
                    log me. Hogshead hearties brace black boom. Coast rig 
                    dead round or.</p>
            </div>
            <div className="contain-movies">
            {currentMovies.map(movie => (
                <Moviecard key={movie.id} movie={movie} onClick={() => handleOpenModal(movie)} />
            ))}
            </div>
            <div className="pagination-container">
            <div className="pagination-buttons">
                    <button  className="buttons" onClick={handlePrev} disabled={currentPage === 1}>
                        Prev
                    </button>
                    <button className="buttons" onClick={handleNext} disabled={indexOfLastMovie >= movies.length}>
                        Next
                    </button>
                </div>
                </div>
        </div>
        {modalOpen && <div className="contain-modal">
                <Moviemodal movie={selectedMovie} onClose={handleCloseModal} />
            </div>}
        </section>
    );
};

export default Home;