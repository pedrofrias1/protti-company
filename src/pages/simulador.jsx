import { Fragment } from "react";
import Nav from "../components/nav/nav";
import SectionSimulador from "../components/simulador/secSimulador"
// import Footer from "../components/footer/footer"

function Simulador({itemsMenu}){
    return(
        <Fragment>
            <Nav itemsMenu={"simulador"} />
           <SectionSimulador/>
            {/* <Footer/> */}
        </Fragment>
    )
}
export default Simulador;