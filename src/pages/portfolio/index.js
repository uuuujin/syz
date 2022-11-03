import React from 'react';
//import './index.css';
import Page1 from './contents/Page1';
import Page2 from './contents/Page2';
import Page3 from './contents/Page3';
import Page4 from './contents/Page4';
//import Scrollbar from "gh-pages/lib/git";


function main() {
    //const Foo  = document.querySelector('.pg-wrapper');
    window.addEventListener('DOMContentLoaded', function () {
        document.documentElement.scrollLeft = 0;
    });
    window.addEventListener('wheel', (e) => {
        const xValue = document.getElementsByClassName('pg-page')[0].clientWidth;
        if (e.deltaY > 0) { // 정방향
            document.documentElement.scrollLeft = window.scrollX + xValue;
        } else { //역방향
            document.documentElement.scrollLeft = window.scrollX - xValue;
        }
    });

    return (
        <div className="pg-wrapper">
            <main id="container" className="pg-container">
                <Page1/>
                <Page2/>
                <Page3/>
                <Page4/>
            </main>
        </div>
    );
}

export default main;
