import React from "react";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import Footer from "./Footer"

function Appmeme() {
    return (
        <div>
            <Header />
            <MemeGenerator />
            <Footer className="page-foot" />
        </div>
    )
}

export default Appmeme;