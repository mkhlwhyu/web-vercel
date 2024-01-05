import "./homestyle.css"
import React from "react";



const LandingPage = () => {
    return (
        <div>
            <h2 className="kata1"> WELCOME TO OUR FINAL EXAM WEBSITE!</h2>
            <nav className="navitem">
                <ul className="nav-item">
                    <li>
                        <a className="links" href="/Project"> Our Portfolio. </a>
                    </li>
                    <li>
                        <a className="links" href="/About">About This Website.</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default LandingPage;
