import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import About from "./pages/About/About";
import NavBar from "./shared/NavBar/NavBar";
import Footer from "./shared/Footer/Footer";
import AllServices from "./pages/AllServices/AllServices";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login/Login";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Register from "./pages/Login/Register/Register";
import EquipmentRent from "./pages/EquipmentRent/EquipmentRent";
import SingleEquipment from "./pages/SingleEquipment/SingleEquipment";
import EquipmentDetail from "./pages/EquipmentRent/EquipmentDetail/EquipmentDetail";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<AllServices />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/equipmentRent" element={<EquipmentRent />} />
                    <Route
                        path={`/equipmentRent/:id`}
                        element={<EquipmentDetail />}
                    />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer></Footer>
            </AuthProvider>
        </div>
    );
}

export default App;
