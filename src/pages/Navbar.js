import { Component } from 'react';
import './Navstyle.css';
import React from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = {clicked: false};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            // judul
            <nav className="Navbaritems">
                <div>
                <Link to="/" className="Logo">Web Informasi.</Link>
                </div>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            
                <ul className={this.state.clicked ? "Navmenu active" : "Navmenu"}>
                        {/* <Link className="nav-items" to="/"> 
                            <li> Home </li>
                        </Link> */}
                        <Link className="nav-items" to="/Project">
                            <li> Our Project </li>
                        </Link>
                        <Link className="nav-items" to="/About">
                            <li> About This Website </li>
                        </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar