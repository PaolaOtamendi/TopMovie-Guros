import logo from "../assets/avengers.png"
import "./header.css"

export const Header = () => {
    return(
        <div className="contain-logo">
            <img className="img-avengers" src={logo} alt=""></img>
        </div>
    )
}