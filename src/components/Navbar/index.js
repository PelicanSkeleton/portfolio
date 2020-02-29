import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Scott P.
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/about" ? "nav-link active" : "nav-link"
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li className="navbar-nav">
                        <Link
                            to="/portfolio"
                            className={
                                window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
                            }
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="navbar-nav">
                        <Link
                            to="/contact"
                            className={
                                window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
                            }
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;