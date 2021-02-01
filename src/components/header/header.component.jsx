import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.styles.scss';
export const Header = () => {
    return (
        <div className="header-container">
            
            <nav class="navbar navbar-expand-lg navbar-dark bg-light">
            <Link className="logo-link" to="">
                <Logo className="logo" />
            </Link>

  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <Link className="option" to="">Home</Link>
    </div>
  </div>
</nav>
            
            
            
            
            
            
            
            
            
            
            
            
            
        

            <div className="option">
              
            </div>
        </div>
    )
}