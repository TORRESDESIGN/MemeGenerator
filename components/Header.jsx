import React from 'react';

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <img className="logo" src="./public/troll-face.png" alt="troll-face" />
                    <h1>Meme Generator</h1>
                </div>
                <h3 className="course">React Course - Project 3</h3>                
            </div>
        </header>
    )
}

export default Header;