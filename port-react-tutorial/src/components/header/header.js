import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <div className="container-fluid">
            <div className="row">
                <nav>
                    <div className="nav-wrapper">
                        <a className="brand-logo" href="/">Logo</a>
                        <ul className="right hide-on-med-and-down">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
);

export default Header;