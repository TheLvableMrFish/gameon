import react from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import {default as AboutContent} from "../components/About"

const About =()=>{
    return(
        <>
        <Header />
        <AboutContent />
        <Footer />
        </>
    )
}

export default About