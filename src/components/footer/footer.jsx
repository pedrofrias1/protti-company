import { Link } from "react-router-dom";

function Footer({itemsMenu}){
    return(
        <footer className={itemsMenu === 'simulador' ? 'footer d-flex flex-column mt-5':''}>
            <div className="footer-logo d-flex align-items-center justify-content-between">
                <Link to="/" className="h2-footer"><h2 >PROTTI</h2></Link>
                <ul class="links d-flex align-items-center justify-content-between">
                    <Link to="/Proyectos" className="li-footer"><li >Proyectos</li></Link>
                    <Link to="/Simulador" className="li-footer"><li>Simulador</li></Link>
                    <Link to="/Nosotros" className="li-footer"><li>Nosotros</li></Link>
                    <Link to="/Faqs" className="li-footer"><li>FAQ´S</li></Link>
                    <Link to="/Contacto" className="li-footer"><li>Contacto</li></Link>
                    <Link to="/Inversionistas" className="li-footer"><li>Inversionistas</li></Link>
                </ul>
            </div>
            <div className="footer-btn d-flex justify-content-center">
                <p className="p-foo text-left font-museo fw400-fs16-lh24">© 2024 Protti. Todos los derechos reservados.</p>
                <ul className="d-flex align-items-center icons-foo">
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-twitter"></i></li>
                    <li><i class="bi bi-instagram"></i></li>
                    <li><i class="bi bi-linkedin"></i></li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer;