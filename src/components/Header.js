import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
class Header extends Component {
    render() {
        return(
                <nav className={this.props.bgcolorname}>
                    <div className="container nav-wrapper">
                    <Link className="brand-logo" to="/">Logo</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/posts">News</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    </div>
                </nav>
        )
    }
}

export default Header;