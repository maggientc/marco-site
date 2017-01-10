// @flow

import React from 'react';
import {Link} from 'react-router';
import './nav.scss';

/** Home component */
class Nav extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props: Object) {
    super(props);
  }

  /** @return {html} Nav */
  render() {
    return (
      <div className="nav-top">
        <ul className="nav-navbar">
          <li className="nav-left">
            <Link className="nav-link" to="/home">LOGO</Link>
          </li>
          <li className="nav-right">
            <Link className="nav-link" to="/about">ABOUT</Link>
            <Link className="nav-link" to="/team">
              <i className="fa fa-user"></i> TEAM
            </Link>
            <Link className="nav-link" to="/work">
              <i className="fa fa-th"></i> WORK
            </Link>
            <Link className="nav-link" to="/pricing">
              <i className="fa fa-usd"></i> PRICING
            </Link>
            <Link className="nav-link" to="/contact">
              <i className="fa fa-envelope"></i> CONTACT
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
