import "./nav.css"
import { Link } from "react-router-dom";
function Nav({itemsMenu}){
  
    return(
        <nav class="nav-bar container d-flex justify-content-between align-items-center"  >
                <Link to="/" className={itemsMenu === 'home' ? 'no-continuo logo-protti' : 'continuo'}>Protti</Link>
                <ul class="links d-flex align-items-center justify-content-between">
                    <li>Proyectos</li>
                    <li><Link to="/Simulador" className={itemsMenu === 'simulador' ? 'continuo' : 'no-continuo'} >Simulador</Link></li>
                    <li>Nosotros</li>
                    <li>FAQ´S</li>
                    <li>Contacto</li>
                    <li><button class={itemsMenu === 'home'?"btn-inversion":"btn-sim"}>Inversionistas</button></li>
                    <li><button class="btn-register">Registarse</button></li>
                    <li>ES</li>
                </ul>
            
            </nav>
    )
}
export default Nav;