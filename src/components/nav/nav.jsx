import "./nav.css"
import { Link } from "react-router-dom";
function Nav({itemsMenu}){
  
    return(
        <nav class="nav-bar container d-flex justify-content-between align-items-center"  >
                <Link to="/" className={itemsMenu === 'home' ? 'no-continuo logo-protti' : 'continuo'}>Protti</Link>
                <ul class="links d-flex align-items-center justify-content-between">
                    <li><Link to="/Proyectos" className={itemsMenu === 'simulador' ? 'continuo' : 'no-continuo'}>Proyectos</Link></li>
                    <li><Link to="/Simulador" className={itemsMenu === 'simulador' ? 'continuo' : 'no-continuo'} >Simulador</Link></li>
                    <li>Nosotros</li>
                    <li>FAQ´S</li>
                    <li>Contacto</li>
                    <li><button class={itemsMenu === 'home'?"btn-inversion":"btn-sim"}>Inversionistas</button></li>
                    <li><Link to="/Login"><button class="btn-register">Registarse</button></Link></li>
                    <li>ES</li>
                </ul>
            
            </nav>
    )
}
export default Nav;