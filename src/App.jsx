import { Route, Routes } from "react-router-dom";
import Home from "./paginas/Home";

const App = () => {
    return (
        <Routes>
            <Route element={<Home />} path="/"></Route>
        </Routes>
    );
};

export default App;