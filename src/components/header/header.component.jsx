import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss';




export const Header = () => {
  return (
    <div className="header-container">
      <nav class="navbar navbar-light bg-dark">
        <Link className="logo-link" to="/">
          <Logo className="logo" />
        </Link>
        <Link className="option" to="/">Home</Link>
      </nav>

    </div>













  )
}