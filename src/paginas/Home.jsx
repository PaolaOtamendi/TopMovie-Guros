import { Header } from "../componentes/Header";
import "./home.css"
import Moviecard from '../componentes/Moviecard';

import useObtenerMovies from "../servicios/movies";

const Home = () => {

    const movies = useObtenerMovies();
    console.log(movies, 1);

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
            {movies.map(movie => (
                <Moviecard key={movie.id} movie={movie} />
            ))}
            </div>
        </div>
        </section>
    );
};

export default Home;