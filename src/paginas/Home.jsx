import { Header } from "../componentes/Header";
import "./home.css"
import Moviecard from '../componentes/Moviecard';

import useObtenerMovies from "../servicios/movies";
import { useState } from "react";

const Home = () => {

    const movies = useObtenerMovies();
    console.log(movies, 1);
    const [currentPage, setCurrentPage] = useState(1);
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
                <Moviecard key={movie.id} movie={movie} />
            ))}
            </div>
            <div className="pagination-buttons">
                    <button onClick={handlePrev} disabled={currentPage === 1}>
                        Prev
                    </button>
                    <button onClick={handleNext} disabled={indexOfLastMovie >= movies.length}>
                        Next
                    </button>
                </div>
        </div>
        </section>
    );
};

export default Home;