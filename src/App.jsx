import { Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";
import Inicio from "./paginas/Inicio";

const App = () => {
    return (
        <Routes>
            <Route element={<Home />} path="/Home"></Route>
            <Route element={<Inicio />} path="/"></Route>
        </Routes>
    );
};

export default App;