

function Stats() {
    return (
        <>
            <section className="d-flex flex-column justify-content-center align-items-center content">
                <div className="d-flex justify-content-around align-items-center stats">
                    <div className="d-flex  font-museo flex-column justify-content-center align-items-center">
                        <p className="text-110 sta text-left ">110</p>
                        <p className="text-stats sta text-left">Inversionistas confiando</p>
                    </div>
                    <div className="d-flex font-museo flex-column justify-content-center align-items-center">
                        <p className="text-110 sta text-left">$12MM</p>
                        <p className="text-stats sta text-left">Activos administrados</p>
                    </div>
                    <div className="d-flex font-museo flex-column justify-content-center align-items-center">
                        <p className="text-110 sta text-left">+18%</p>
                        <p className="text-stats sta text-lef">Retorno estimado</p>
                    </div>
                </div>
                <article className="article-stats d-flex flex-column justify-content-center align-items-center">

                    <p className="p-article sta text-lef font-museo">Nos enfocamos en proyectos a medida, aprovechando condiciones de contratos inmejorables para una mejor rentabilidad y menor riesgo. </p>

                    <div className="d-flex justify-content-around align-items-center register-call">
                    <button className="btn-invertir">Invertir ahora</button>
                    <button className="btn-call gap-2 d-flex"><i class="bi bi-calendar"></i>Agendar una llamada</button>
                    </div>
                </article>
            </section>
        </>
    )
}
export default Stats;