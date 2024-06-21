import "./inicio.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Inicio = () => {
    return(
    <section className="contain-inicio">
        <div className="contain-p1">
            <p>PT</p>
        </div>
        <div className="contain-parte2">
            <p className="p1">Prueba Técnica</p>
            <p className="p2">Junio 2024</p>
            <div>
            <Link to="/Home">
            <button className="buttonnext">
            <FontAwesomeIcon icon={faArrowRight} style={{color: "#e5004d", fontSize: '36.6px'}} /></button>
            </Link>
            </div>
        </div>
        </section>
    );
};

export default Inicio;