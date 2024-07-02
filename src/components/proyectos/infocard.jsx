function InfoCard({ title, porcentaje, ea, city, content }) {
    return (
        <div className="d-flex flex-column justify-content-center">
            <h4>{title} </h4>
            <span><i class="bi bi-geo-alt color-96"></i> {city} </span>
            <p>{content} </p>
            <div className="info d-flex align-items-center">
                <div className="loader d-flex align-items-center justify-content-around">
                    <span className="text-72 texts text-left font-museo color-32">{porcentaje}%</span>
                    <div className="bar-loader">
                        <div className="rect d-flex" id="rect-barra"></div>
                    </div>
                </div>
                <div className="ea d-flex align-items-center justify-content-center">
                    <div className="refresh even">
                        <i class="bi bi-arrow-clockwise even"></i>
                    </div>

                    <span className="text-ea texts text-left fw400-fs16-lh24 color-32">{ea}% E.A</span>

                </div>
            </div>
            <div className="actions d-flex align-items-center mt-4">
                <button className="btn-invertir">Invertir ahora</button>
                <button><i class="bi bi-eye text-detalles details font-museo color-32 font-600">Detalles del proyecto</i></button>
            </div>
        </div>
    )
}
export default InfoCard;