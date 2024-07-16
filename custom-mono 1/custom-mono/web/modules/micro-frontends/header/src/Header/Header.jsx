import React from 'react';
import "./Header.scss";
import { StyleLoader, Button } from "@fstr/components";

const Header = () => {
    return (
        <>
            <StyleLoader />
            <header>
                <div className='logo'>
                    <h2>IndiGo</h2>
                </div>
                <div className='menu'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                    <Button className='btn primary-bg px-7 py-7' text="Book Now" />
                </div>
            </header>
        </>
    )
}

export default Header
