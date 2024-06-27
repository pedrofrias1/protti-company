import { Fragment } from "react"
import Main from "./main"
import Header from "./header"
import Footer from "../components/footer/footer"
import "./home.css"

function Home(params) {
    return(
        <Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </Fragment>
    )
}
export default Home