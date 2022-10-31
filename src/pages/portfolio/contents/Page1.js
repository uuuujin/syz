import React from "react";
import './Page.scss';
//import { useState } from "react";
import {useEffect} from "react";
//import ReactDOM from "react-dom";

export default function Page1() {

    const ResizedComponent = () => {
        const handleResize = () => {
            console.log(`브라우저 화면 사이즈 : ${window.innerWidth}, y : ${window.innerHeight}`);
        }

         useEffect(( ) => {
            window.addEventListener('resize', handleResize);
            return () => {  //cleanup
                window.removeEventListener('resize', handleResize);
            }
        }, []);
    }


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
                뭐라도 하자
                <div>
                    브라우저 화면 사이즈
                    x : {window.innerWidth},
                    y : {window.innerHeight}
                </div>
            </section>
        )
}
