import React from "react";
import {Welcome} from "./Welcome.jsx";
import "./App.css"

 export default function App() {

     return (
         <>
             <header>
                 <h1>My First App</h1>
             </header>
             <main>
                <Welcome name="Awesome!"
                imgURL="https://picsum.photos/200?a=1"/>
                <Welcome name="Cool!"
                imgURL="https://picsum.photos/200?a=3"/>
                 <p>Hello React!</p>
             </main>
         </>
     );
 }