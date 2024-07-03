import Nav from "../components/nav/nav";
import React from "react";
import Select from "react-select";



function Header({itemsMenu}) {

    const farmatdo = [
        { label: 'Farmatodo Cota, Bogotá, Cundinamarca', value: '1'},
        { label: 'Farmatodo Pasadena, Bogotá, Cundinamarca', value: '2' },
        { label: 'Proyecto inmobiliario, Próximamente', value: '3' }
    ]


    const handlerChange = (event) => {
        console.log(event + " clcik");
    }

    return (
        <header class="header-home pb-5">

            <Nav itemsMenu={"home"} />

            <section class="d-flex hero-section container">
                <div class="d-flex flex-column">
                    <div>
                        <h1 class="hero-text">! Inversiones inmobiliarias de <span class="hero-span">alto valor</span> a tu
                            alzance!</h1>
                    </div>
                    <div class="div-btn-hero">
                        <button class="btn-register">Invertir ahora</button>
                        <a href="#htt" class="show-proyects">Descubrir proyectos</a>
                    </div>
                </div>

                <div className="div-label">
                    <img src="../img/photo.jpg" class="photo" alt="" />

                    <label for="" class="first-label label d-flex align-items-center color-32 height-72"><i class="bi bi-currency-dollar"></i>+ $950.000,00
                        COP</label>


                    <label for="" class="second-label label d-flex align-items-center color-32 height-72 top-312"><i class="bi bi-currency-dollar"></i>3 inversiones
                        activas</label>



                    <label for="" class="tree-label label d-flex align-items-center color-32 height-72 top-312"><i class="bi bi-currency-dollar"></i>+18% E.A</label>

                </div>

            </section>

            <section class="calculator d-flex justify-content-between align-items-center">
                <div>
                    <h4 class="calc-h4 calc">Proyecto</h4>
                  
                    <Select name="" id="select" className="d-flex justify-content-between text-black" options={farmatdo} />
                    
                    
                    
                </div>

                <div>
                    <h4 class="calc-h4 calc">Monto</h4>
                    <input type="text" placeholder="cuanto deseas invertir?" className="input-ivertir"/><span class="span-calc calc">*Min $5.000.000,00</span>
                </div>

                <button class="btn-simulacion">Simular inversion</button>

            </section>



        </header>
    )
}
export default Header;