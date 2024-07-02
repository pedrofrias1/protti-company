import imgProyect from "../../img/proyectos.jpeg"
import InfoCard from "./infocard"

function Card() {
    const details = [
        { img: imgProyect, title: 'Farmatodo Cota - Inversión Inmobiliaria ', city: 'Cota, Cundinamarca, Bogotá', content: 'El Stand Alone de Farmatodo es un proyecto hecho a la medida sumamente importante en el municipio de Cota. Ubicado sobre la vía principal de Cota, donde en los últimos años se ha podido ver una densificación significativa en el municipio.', porcentaje: '31', ea: '17.2' },
        { img: imgProyect, title: 'Farmatodo Cota - Inversión Inmobiliaria ', city: 'Cota, Cundinamarca, Bogotá', content: 'El Stand Alone de Farmatodo es un proyecto hecho a la medida sumamente importante en el municipio de Cota. Ubicado sobre la vía principal de Cota, donde en los últimos años se ha podido ver una densificación significativa en el municipio.', porcentaje: '72', ea: '17.2' },
        { img: imgProyect, title: 'Farmatodo Cota - Inversión Inmobiliaria ', city: 'Cota, Cundinamarca, Bogotá', content: 'El Stand Alone de Farmatodo es un proyecto hecho a la medida sumamente importante en el municipio de Cota. Ubicado sobre la vía principal de Cota, donde en los últimos años se ha podido ver una densificación significativa en el municipio.', porcentaje: '47', ea: '17.2' },
        { img: imgProyect, title: 'Farmatodo Cota - Inversión Inmobiliaria ', city: 'Cota, Cundinamarca, Bogotá', content: 'El Stand Alone de Farmatodo es un proyecto hecho a la medida sumamente importante en el municipio de Cota. Ubicado sobre la vía principal de Cota, donde en los últimos años se ha podido ver una densificación significativa en el municipio.', porcentaje: '64', ea: '17.2' }

    ]
    return (
        <div className="cont-grid mt-5">
            {
                details.map((deta) => {
                    return (
                        <div className="card-contain">
                            <img src={deta.img} alt="img-proyectos" className="img-proyectos" />
                            <div className="d-flex flex-column">
                                <InfoCard title={deta.title} city={deta.city} content={deta.content} porcentaje={deta.porcentaje} ea={deta.ea} />
                            </div>

                        </div>



                    )
                })
            }

        </div>
    )
}
export default Card;