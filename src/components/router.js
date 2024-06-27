// import {Route, Routes} from "react-router-dom"
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../home/home";
import Simulador from "../pages/simulador";
import Proyectos from "../pages/proyectos";
import Nosotros from "../pages/nosotros";
import Contacto from "../pages/contacto";

function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Simulador" element={<Simulador/>}/>
            <Route path="/Proyectos" element={<Proyectos/>}/>
            <Route path="/Nosotros" element={<Nosotros/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
        </BrowserRouter>
        
        
    )
}
export default Router;