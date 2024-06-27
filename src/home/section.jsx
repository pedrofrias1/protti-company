import { Fragment } from "react";
import farma from "../img/farmatodo.png"
import SectionOther from "./sectionOther";


function SectionNew() {
    return (
        <Fragment>
            <section className="cont">
                <div className="new-project">
                    <div className="text-project d-flex align-items-center justify-content-between ">
                        <div className="text-button d-flex flex-column">

                            <div className="text-overline ">
                                <p className="nuevo font-museo font-400 color-32">NUEVO PROYECTO ABIERTO PARA INVERSIONES</p>
                                <h3 className="explora color-32">Explora más allá de las inversiones tradicionales. ¡Descubre nuestro proyecto más reciente y aprovecha la oportunidad de invertir en tu futuro!</h3>
                            </div>
                            <div className="info d-flex align-items-center">
                                <div className="loader d-flex align-items-center justify-content-around">
                                    <span className="text-72 texts text-left font-museo color-32">72%</span>
                                    <div className="bar-loader">
                                        <div className="rect d-flex" id="rect-barra"></div>
                                    </div>
                                </div>
                                <div className="ea d-flex alig-items-center justify-content-around">
                                    <div className="refresh even">
                                        <i class="bi bi-arrow-clockwise even"></i>
                                    </div>

                                    <span className="text-ea texts text-left fw400-fs16-lh24 color-32">18.% E.A</span>

                                </div>
                            </div>
                            <div className="actions d-flex">
                                <button className="btn-invertir">Invertir ahora</button>
                                <div className="detalles-project p-g-d d-flex align-items-center see-more justify-content-between">
                                <i class="bi bi-eye color-32"></i>
                                <span className="text-detalles details font-museo color-32 font-600 ">Detalles del proyecto</span>
                                </div>
                            </div>
                        </div>
                        <div className="farmatodo text-left d-flex flex-column">
                            <img src={farma} alt="farma" className="farmatodo text-left" />
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
               <SectionOther/>
               {/* <SectionStats/> */}
            </section>
        </Fragment>
    )
}
export default SectionNew