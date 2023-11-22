import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className='header_VH'>
            <div className='logo_VH'>
                WEB 202
            </div>
            <div className='navigate_VH'>
                <div>
                    <a href="#" style={{ textDecoration: 'none', color: 'white' }}>Accounts</a>
                    <div className="underline"></div>
                </div>
            </div>
            <div className='navigate_VH'>
                <div>
                    <a href="#" style={{ textDecoration: 'none', color: 'white' }}>About Us</a>
                    <div className="underline"></div>
                </div>

            </div>
        </div>
    );
};

export default Header;