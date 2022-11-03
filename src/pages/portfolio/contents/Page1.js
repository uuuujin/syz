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


    return (
            <section data-anchor="Page 1" className="pg-page">
                page1
                <div>
                    브라우저 화면 사이즈
                    x : {window.innerWidth},
                    y : {window.innerHeight}
                </div>
            </section>
        )
}
