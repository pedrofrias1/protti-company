import { useState } from 'react';
import PhoneInput from 'react-phone-number-input'

function CardRegister() {
    const [value, setValue] = useState('US');

    return (
        <div className="card-register-container">
            {/* btn-close */}
            <div className="d-flex flex-column card-register">
                <h4>Regístrate en Protti</h4>
                <p className="fw400-fs16-lh24 color-32">Completa la siguiente información para crear tu cuenta y comenzar a invertir en tu futuro.</p>
                <form action="" method="get" className="d-flex flex-column align-items-start gap-2">
                    <label htmlFor="nombre">Nombre*</label>
                    <input type="email" name="nombre" id="nombre" className="input-login" placeholder="Ingresa tu Nombre" />
                    <label htmlFor="apellido">Apellido*</label>
                    <input type="email" name="apellido" id="apellido" placeholder="Ingresa tu apellido" className="input-login" />
                </form>

                <form action="" method="get">
                    <label htmlFor="telefono">Número de teléfono*</label>
                    <PhoneInput
                        className='phoneInput'
                        placeholder="Ingresa tu número de télefono"
                        value={value}
                        onChange={setValue} />
                </form>
                <span>*Los campos son obligatorios</span>
                <div className='steps d-flex justify-content-center align-items-center'>
                    <div className="bar-loader" id='green'>
                        <div className="rect d-flex "  ></div>
                    </div>
                    <div className="bar-loader">
                        <div className="rect d-flex" ></div>
                    </div>
                    <div className="bar-loader">
                        <div className="rect d-flex"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardRegister;