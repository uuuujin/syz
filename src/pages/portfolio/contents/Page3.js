import React from "react";
//import ReactDOM from "react-dom";
import './Page.scss';


export default function Page3() {
     const w = window.innerWidth + 'px';
     const h = window.innerHeight + 'px';

     const pageSection = {
        backgroundColor : '#FF6961',
        width : w,
        height : h
    };

    return (
            <section data-anchor="Page 3" className="pg-page" style={pageSection}>
                여긴 page3
            </section>
        )
}
