import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                    <span id='logo'>Cheat Code</span><span id='slogan'>Templates Made Easy</span>
                    </a>

                    {/*<div className="navbar-burger">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>*/}
                </div>
            </nav>
        )
    }
}

export default Navbar;