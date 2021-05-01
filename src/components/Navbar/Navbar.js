import React from 'react';

function Navbar(){
    return (
        <div className="navbar">
            <div className="navbar-container">
                <a className="navbar-container__logo" href="#">
                    Budget<span>App</span>
                </a>
                <img src="" alt="open navbar menu" className="navbar-container__hamburger"/>
                <nav>
                    <ul>
                        <img src="" alt="close navbar menu" className="navbar-container__cross"/>
                        <li className="navbar-container__signup">
                            <a href="#">Signup</a>
                        </li>
                        <li className="navbar-container__login">
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar;