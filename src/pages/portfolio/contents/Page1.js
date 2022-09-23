import React from "react";
import './Page.scss';
//import { useState } from "react";
//import ReactDOM from "react-dom";

export default function Page1() {
    //const [resize, setResize] = useState();

    const w = window.innerWidth + 'px';
    const h = window.innerHeight + 'px';

    const pageSection = {
        backgroundColor : 'pink',
        width : w,
        height : h
    };
    return (
            <section data-anchor="Page 1" className="pg-page" style={pageSection}>
                여긴 page1
            </section>
        )
}
