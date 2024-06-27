import { Fragment } from "react";
import Farmatodo from "./farmatodo";

function SectionOther(){
    return (
       <section className="section-others d-flex flex-column align-items-center justify-content-center">
        <h3 className="text-others color-96 font-museo font-600">Otros proyectos que podrían interesarte</h3>
        <div className="d-flex align-items-center proyectos">
            <Farmatodo/>
            <Farmatodo/>
            <div className="layouts font-museo font-600 d-flex align-items-center justify-content-center see-more" >
              <p className="d-flex align-items-center gap-4" >Ver todos <i class="bi bi-arrow-right"></i></p>
            </div>

        </div>

       </section>
    )
}
export default SectionOther;