import React, { useState } from "react";
import "./Welcome.css"

export function Welcome({ name, imgURL }) { //export makes it public (available to other functions)

    //state variables go at the top
    const [style, setStyle] = useState("card");
    //create a function called setStyle whose job it is to modify style  
    
    const [times, setTimes] = useState(0);
    
    //closure: inner function
    function toggleClass(){
        console.log("change the card class!");
        if (style === "card") {
            setStyle("active-card");
        } else {
            setStyle("card");
        }  
    }

    function addOne(){
        setTimes(times + 1);  
        ev.stopPropagation();
    }

    return (<section className={style} onClick={toggleClass}>
        <h2>Hello, {name}</h2>
        <img src={imgURL} />   
        <button onClick={addOne}>This has been clicked {times} times.</button>  
        </section>
    );
}