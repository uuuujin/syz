import React from 'react';
//import './index.css';
import Page1 from './contents/Page1';
import Page2 from './contents/Page2';
import Page3 from './contents/Page3';


function port() {
    //const Foo  = document.querySelector('.pg-wrapper');
    window.addEventListener('scroll', (e) => {
        const value = window.scrollY;
        //Foo.style.left = value + 'px';
        console.log(value + '스크롤 이벤트 감지');
    });

    return (
        <div className="pg-wrapper">
            <main id="container" className="pg-container">
                <Page1/>
                <Page2/>
                <Page3/>
            </main>
        </div>
    );
}

export default port;
