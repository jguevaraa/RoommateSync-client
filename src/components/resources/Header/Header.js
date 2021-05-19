import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { withAuth } from '../../../context/auth.context';

class Header extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="header" role="navigation" aria-label="main navigation">
       <div className="navbar-brand">
       <a className="navbar-item" href="/">
       <img src="https://www.pikpng.com/pngl/b/340-3409836_house-panorama-logos-de-agente-de-bienes-raices.png" width={80}/>
            </a>
            </div>
            <a className="navbar-item">
          <Link to="/" id='home-btn'>
            Home
          </Link>
          </a>
          {this.props.isLoggedIn ? (
            <>
            
              <p className="navbar-item"> {this.props.user && this.props.user.username}</p>
              <a className="navbar-item">
              <a onClick={this.props.logout}>Logout</a>
              </a>
              <a className="navbar-item">
              <Link to="/profile">
              Profile
              </Link>
              </a>
            </>
          ) : (
            <>
            <a className="navbar-item">
              <Link to="/login">
              Login
                {/* <button className="navbar-button">Login</button>{' '} */}
              </Link>
              </a>
              <br />
              <a className="navbar-item">
              <Link to="/signup">
              Sign Up
                {/* <button className="navbar-button">Sign Up</button>{' '} */}
              </Link>
              </a>
              
            </>
          )}
        </nav>
    );
  }
}

export default withAuth(Header);
