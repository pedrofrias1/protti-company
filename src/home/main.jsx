import { Fragment } from "react"
import SectionNew from "./section";
import SectionSta from "./sectionstats"
import SectionInvertir from "./sectInver";


function Main(){
    return(
        <Fragment>
            <main>
                <SectionNew/>
                <SectionSta/>
                <SectionInvertir/>
            </main>
        </Fragment>
    )
}
export default Main