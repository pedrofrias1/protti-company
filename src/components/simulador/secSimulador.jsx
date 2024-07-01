import "./simulation.css"

function SectionSimulador() {

    const amount = [
        { number: '01', año: 1 },
        { number: '02', año: 2},
        { number: '03', año: 3},
        { number: '04', año: 4},
        { number: '05', año: 5},
        { number: '06', año: 6},
        { number: '07', año: 7},
        { number: '08', año: 8},
        { number: '09', año: 9},
        { number: '10', año: 10},
    ]


    return (
        <div className="conatiner-simulador ">
            <div className="d-flex align-items-center text-grup">
                <div className="d-flex flex-column text">

                    <div className="d-flex flex-column title-inputs">
                        <div>
                            <p className="simula color-32 font-museo text-left">Simula tu inversión</p>
                            <p className="color-32 fw400-fs16-lh24 font-museo text-left">Explora a fondo el proyecto y simula tu inversión.</p>
                        </div>

                        <div className="inputs d-flex flex-column">
                            <label htmlFor="proyectos">Proyectos</label>
                            <select name="" id="proyectos" className="select-button">
                                <option value="Farmatodo Cota">
                                    Farmatodo Cota
                                    Bogotá, Cundinamarca
                                </option>
                                <option value="Farmatodo Pasadena">Farmatodo Pasadena
                                    Bogotá, Cundinamarca
                                </option>
                                <option value="Proyecto inmobiliario">
                                    Proyecto inmobiliario
                                    Próximamente
                                </option>
                            </select>
                        </div>
                        <br />

                        <div className="inpusts d-flex flex-column">
                            <label htmlFor="">Monto a invertir</label>
                            <input type="text" className="select-button" placeholder="$" />
                            <span class="span-calc calc">*Min $5.000.000,00</span>
                        </div>

                        <div className="d-flex align-items-center">
                            <button class="btn-register">Invertir ahora</button>
                            <button className="btn-call-simulador font-museo gap-2 d-flex"><i class="bi bi-calendar"></i>Agendar una llamada</button>
                        </div>


                    </div>


                </div>

                <div className="graph">
                    <p className="p-graph"> Rentabilidad de inversión por año</p>
                    <div className="graph-reference d-flex flex-column">
                        <div className="graf_board">
                            <div className="amount d-flex flex-column align-items-center">
                                <div className="p-amount">$15 M</div>
                                <div className="p-amount">$10 M</div>
                                <div className="p-amount">$5 M</div>
                                <div className="p-amount">$0</div>
                            </div>

                            {
                                amount.map((amou) => {
                                    return (
                                        <div class="barra">
                                            <div class="sub_barra b5">
                                                <div className="d-flex gap-1">
                                                    <div className="tag_g"><div className="blue"></div></div>
                                                    <div className="tag_g"><div className="green"></div></div>
                                                </div>
                                            </div>
                                            <div class="tag_leyenda">{amou.number}</div>
                                        </div>

                                    )
                                })
                            }


                          
                        </div>

                        <div className="d-flex align-items-center gap-3">
                            <div className=""><p><i class="bi bi-circle-fill circle-blue"></i>Ingresos por arrendamientos</p></div>
                            <div className=""><p><i class="bi bi-circle-fill circle-green"></i>Valorización estimada</p></div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}
export default SectionSimulador;