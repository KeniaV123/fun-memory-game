import React from "react";
import { Link } from "react-router-dom";

export const NavbarGame = () => {

    const showMenu = () => {
        // Toggle the class nav-menu_visible to show or hide the menu in mobile view
        document.querySelector('.navbar').classList.toggle("nav-menu_visible");
    }

    return (
        <header>
            <Link to="/" className="logo nav-link">
                Memory Game :)
            </Link>

            <button 
                className="nav-toggle"
                onClick={ showMenu }
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            <nav className="navbar">
                <ul>
                    <li className="nav-menu-item">
                        <p className="nav-menu-link nav-link">
                            Categories
                            <i className="fa-solid fa-caret-down menu-arrow"></i>
                        </p>
                        <ul className="sub-nav-menu">
                            <li className="sub-nav-menu-item"><Link to="/categories/dogs" className="nav-menu-link">Dogs</Link></li>
                            <li className="sub-nav-menu-item"><Link to="/categories/cats" className="nav-menu-link">Cats</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
