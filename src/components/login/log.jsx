import "./login.css"
import {Link} from "react-router-dom";
function Log() {
    return (
        <main className="main-login">
            <div className="pop-up">
                <Link to="/" className="close"><i >X</i></Link>
                <div className="d-flex flex-column  gap-3">
                    <h5 className="h5">Inicia sesión en Protti</h5>
                    <p className="fw400-fs16-lh24">Ingresa tus credenciales para ir a tu panel de inversionista:</p>
                    <form action="" method="get" className="d-flex flex-column align-items-start gap-2">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" name="email" id="email" className="input-login" placeholder="Ingresa tu correo electrónico" />
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="email" name="contraseña" id="contraseña" placeholder="Ingresa tu contraseña" className="input-login" />
                    </form>
                    <div className="d-flex align-items-center gap-2">
                        <p>¿Has olvidado tu contraseña?</p>
                        <p className="olvidar-contraseña">Has click aquí.</p>
                    </div>
                    <div className="d-flex flex-column align-items-center gap-2">
                        <button className="btn-login">Inicia Seción</button>
                        <Link to="/Register" className="fw400-fs16-lh24 color-96 crear-cuenta">¿No tienes una cuenta en Protti?</Link>
                        <p>Registrate ahora</p>
                    </div>

                </div>
            </div>
        </main>
    )
}
export default Log;