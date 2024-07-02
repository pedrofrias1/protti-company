import farma from "../../img/farmatodo.png"
function Fondeados() {
    return (
        <div className="proyectos-fondeados mt-5">
            <div className="text-fondeados d-flex align-items-center justify-content-between ">
                <div className="button-fondeados d-flex flex-column">

                    <div className="text-overline ">
                        <h3 className="explora color-32">Conoce los proyectos que ya han sido fondeados. En Protti seleccionamos y estructuramos los mejores proyectos para ofrecer condiciones de inversión inigualables.</h3>
                       
                    </div>
                   
                    <div className="actions d-flex">
                        <button className="btn-completados">Ver proyectos completados</button>
                    </div>

                </div>
                <div className="farmatodo text-left d-flex flex-column">
                    <img src={farma} alt="farma" className="fondeados" />
                    <div className="title-location">
                        <h5 className="text-title text-left fw700 details font-museo">Farmatodo Cota - Inversión Inmobiliaria</h5>
                    </div>
                    <div className="location d-flex align-items-center justify-content-around">
                        <i class="bi bi-geo-alt color-96"></i>
                        <span className="location-bogota color-96 font-museo fw400-fs16-lh24 text-left">Cota, Cundinamarca, Bogotá</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Fondeados;