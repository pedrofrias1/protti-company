import { Fragment } from "react";
import Nav from "../components/nav/nav";
import Proyect from "../components/proyectos/proyect";
import Fondeados from "../components/proyectos/fondeados";

function Proyectos({ itemMenu }) {
    return (
        <Fragment>
            <body className="body-proyectos">
                <Nav itemsMenu={'simulador'} />
                <main className="section-proyectos">
                    <section>
                        <Proyect />
                        <Fondeados />
                    </section>

                </main>
            </body>


        </Fragment>

    )
}
export default Proyectos;