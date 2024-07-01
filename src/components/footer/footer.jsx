function Footer({itemsMenu}){
    return(
        <footer className={itemsMenu === 'simulador' ? 'footer d-flex flex-column mt-5':'s'}>
            <div className="footer-logo d-flex align-items-center justify-content-between">
                <h2 className="h2-footer">PROTTI</h2>
                <ul class="links d-flex align-items-center justify-content-between">
                    <li>Proyectos</li>
                    <li>Simulador</li>
                    <li>Nosotros</li>
                    <li>FAQ´S</li>
                    <li>Contacto</li>
                    <li>Inversionistas</li>
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