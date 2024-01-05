import "./porto.css"
import React, { useEffect, useState } from 'react';
import mikhael from "./img/mikhael.jpg"
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat';

function Mikhael() {
    return (
    <div className="App">
    <table>
    <img className="foto" src={mikhael} alt='mikh'/>
        <div className="borderan">
            <tr>
                <td className="namaorang">Hi! I'm Mikhael Wahyu</td>
            </tr>
            <tr>
                <td className="kerjaan"> Junior Front-End Developer & Web-Developer </td>
            </tr>
            <tr>
                <td><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"></img>HTML5</td>
            </tr>
            <tr>
                <td><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"></img>CSS</td>
            </tr>
            <tr>
                <td><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"></img>JavaScript</td>
            </tr>
            <tr>
                <td><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"></img>React</td>
            </tr>
        </div>
    </table>
</div>
);
}

export default Mikhael;