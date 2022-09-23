import React from "react";
//import ReactDOM from "react-dom";
import './Page.scss';


export default function Page2() {
     const w = window.innerWidth + 'px';
     const h = window.innerHeight + 'px';

     const pageSection = {
        backgroundColor : 'red',
        width : w,
        height : h
    };

    return (
            <section data-anchor="Page 2" className="pg-page" style={pageSection}>
                여긴 page2
            </section>
        )
}
