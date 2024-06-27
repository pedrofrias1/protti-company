import "./simulation.css"

function SectionSimulador() {
    return (
        <div className="conatiner-simulador ">
            <div className="d-flex text-grup">
                <div className="d-flex flex-column text">

                    <div className="d-flex flex-column title-inputs">
                        <div>
                            <p className="simula color-32 font-museo text-left">Simula tu inversión</p>
                            <p className="explora-simulacion color-32 fw400-fs16-lh24 font-museo text-left">Explora a fondo el proyecto y simula tu inversión.</p>
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

                <div className="d-flex flex-column graph">
                    <p className="fw400-fs16-lh24">Rentabilidad de inversión por año</p>
                    <div className="graph-reference">
                        {/* <div className="grap d-flex flex-column justify-content-between">
                                <div className="amount d-flex flex-column justify-content-center">
                                <p>$15 M</p>
                                <p>$10 M</p>
                                <p>$5 M</p>
                                <p>$0</p>
                                </div>
                                <div className="d-flex justify-content-around año">
                                <div className="bar-loader bars">
                                        <div className="rect d-flex flex-column" id="rect-barra"></div>
                                    </div>
                                    
                                    <p>02</p>
                                    <p>03</p>
                                    <p>04</p>
                                    <p>05</p>
                                    <p>06</p>
                                    <p>07</p>
                                    <p>08</p>
                                    <p>09</p>
                                    <p>10</p>
                                </div>
                            </div> */}

                        <div class="grap">
                            <div class="sep_board"></div>
                            <div class="cont_board">
                                <div class="graf_board">
                                    <div class="barra">
                                        <div class="sub_barra b1">
                                            <div className="tag_g"><div className="blue"></div></div>
                                            <div class="tag_leyenda">01</div>
                                        </div>
                                    </div>
                                    <div class="barra">
                                        <div class="sub_barra b2">
                                            <div className="tag_g"></div>
                                            <div class="tag_leyenda">02</div>
                                        </div>
                                    </div>
                                    <div class="barra">
                                        <div class="sub_barra b3">
                                            <div className="tag_g"></div>
                                            <div class="tag_leyenda">03</div>
                                        </div>
                                    </div>
                                    <div class="barra">
                                        <div class="sub_barra b4">
                                            <div className="tag_g"></div>
                                            <div class="tag_leyenda">04</div>
                                        </div>
                                    </div>
                                    <div class="barra">
                                        <div class="sub_barra b5">
                                            <div className="tag_g"></div>
                                            <div class="tag_leyenda">05</div>
                                        </div>
                                    </div>
                                    <div class="barra">
                                        <div class="sub_barra b5">
                                            <div className="tag_g"></div>
                                            <div class="tag_leyenda">06</div>
                                        </div>
                                    </div>
                                    <div class="barra">
                                        <div class="sub_barra b5">
                                            <div className="tag_g"></div>
                                            <div class="tag_leyenda">07</div>
                                        </div>
                                    </div>
                                    <div class="barra">
                                        <div class="sub_barra b5">
                                            <div className="tag_g"></div>
                                            <div class="tag_leyenda">08</div>
                                        </div>
                                    </div>
                                    <div class="barra">
                                        <div class="sub_barra b5">
                                            <div className="tag_g"></div>
                                            <div class="tag_leyenda">09</div>
                                        </div>
                                    </div>
                                    <div class="barra">
                                        <div class="sub_barra b5">
                                            <div className="tag_g"></div>
                                            <div class="tag_leyenda">10</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tag_board">
                                    <div class="sub_tag_board">
                                        <div>$15 M</div>
                                        <div>$10 M</div>
                                        <div>$5 M</div>
                                        <div>$0</div>
                                    </div>
                                </div>
                            </div>
                            <div class="sep_board"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default SectionSimulador;