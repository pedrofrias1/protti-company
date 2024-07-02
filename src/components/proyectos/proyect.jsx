import Card from "./cards"
import "./proyect.css"

function Proyect(){
    return(
        <section className=" d-flex flex-column">
            <h6>Proyectos seleccionados para inversiones</h6>
            <div className="mt-5">
                <Card/>
            </div>
            
        </section>
           
    )
}
export default Proyect