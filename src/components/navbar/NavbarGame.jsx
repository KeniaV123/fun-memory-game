import React from "react";

export const NavbarGame = () => {

    const showMenu = () => {
        // Toggle the class nav-menu_visible to show or hide the menu in mobile view
        document.querySelector('.navbar').classList.toggle("nav-menu_visible");
    }

    return (
        <header>
            <a href="/" className="logo nav-link">
                Memory Game :)
            </a>

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
                            <i class="fa-solid fa-caret-down menu-arrow"></i>
                        </p>
                        <ul className="sub-nav-menu">
                            <li className="sub-nav-menu-item"><a href="/" className="nav-menu-link">Dogs</a></li>
                            <li className="sub-nav-menu-item"><a href="/" className="nav-menu-link">Cats</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
