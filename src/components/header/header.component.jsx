import React from 'react';
import { Link } from 'react-router';
import { ReactComponent as Logo } from '../../assets/logo.svg'
export const Header = () => {
    return (
        <div className="header-container">
            <Link to="">
                <Logo />
            </Link>
            <Link to="">Home</Link>
        </div>

    )
}