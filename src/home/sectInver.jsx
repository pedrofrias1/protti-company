import boy from "../img/boyPhone.jpg"
import protti from "../img/protti.jpg"


function SectionInvertir() {
    return (
        <section className="inventir d-flex flex-column justify-content-center align-items-center">

            <div className="text-inver d-flex flex-column justify-content-center align-items-center">
                <p className="how-inversion font-museo color-32">¿Cómo invertir en Protti?</p>
                <p className="p-inversion font-museo">Consectetur adipiscing elit. Vestibulum mollis nunc a molestie dictum. Mauris venenatis, felis scelerisque aliquet lacinia, nulla nisi venenatis odio, id blandit mauris ipsum id sapien.</p>

                <div className="boy-container d-flex gap-2 align-items-center justify-content-center container">
                    <img src={boy} alt="boy-phone" className="boy" />

                    <div className="boy-text">
                        <div className="cont-boy cont-1">
                            <p className="boy-p">Decide el monto a invertir</p>
                        </div>
                        <div className="cont-boy cont-2">
                            <p className="boy-p">Valida tu identidad</p>
                        </div>
                        <div className="cont-boy cont-3">
                            <p className="boy-p">Firma el contrato</p>
                        </div>
                        <div className="cont-boy cont-4">
                            <p className="boy-p">Realiza el desembolso</p>
                        </div>
                        <div className="cont-boy cont-5">
                            <p className="boy-p">Ingresa al panel de inversionista</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonial-container d-flex justify-content-center align-items-center mt-5">
                <div className="frame d-flex align-items-center justify-content-center">
                    <div className="frame-1 d-flex flex-column">
                        <p className="frame-p color-32 font-museo">LOS INVERSIONISTAS CONFÍAN EN PROTTI</p>
                        <p className="descubre font-museo color-32">Descubre lo que dicen nuestros clientes sobre nosotros. Sus testimonios son la mejor prueba de nuestro compromiso.</p>
                        <button className="btn-frame color-32">Comenzar ahora</button>
                    </div>

                    <div className="frame-2 d-flex flex-column">
                        <div>
                            <p className="p font-museo">Protti ofrece una muy interesante alternativa para el mercado. Desde el primer momento me pareció un modelo de negocio innovador, pero sobre todo serio y enfocado a la realidad del mercado.</p>

                            <div className="d-flex align-items-center gap-2">
                                <img src={protti} alt="" className="protti-img"/>
                                <div>
                                  <p>Mauricio Cano</p>
                                <p>Inversionista en Farmatodo Cota</p>  
                                </div>
                                
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default SectionInvertir;