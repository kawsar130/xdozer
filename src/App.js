import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import NavBar from "./shared/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="services" element={<Services />} />
            </Routes>
        </div>
    );
}

export default App;
