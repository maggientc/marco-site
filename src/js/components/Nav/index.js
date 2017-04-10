// @flow

import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './nav.scss';

/** Home component */
class Nav extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props: Object) {
    super(props);
  }

  /** @return {html} Nav */
  render() {
    const labels = this.props.labels;
    return (
      <div className="nav-top">
        <ul className="nav-navbar">
          <li className="nav-left">
            <Link className="nav-link" to="/#home" />
          </li>
          <li className="nav-right">
            <Link className="nav-link" to="/#about">{labels.about}</Link>
            <Link className="nav-link" to="/#team">
              <i className="fa fa-user"></i> {labels.team}
            </Link>
            <Link className="nav-link" to="/#work">
              <i className="fa fa-th"></i> {labels.work}
            </Link>
            <Link className="nav-link" to="/#contact">
              <i className="fa fa-envelope"></i> {labels.contact}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

Nav.propTypes = {
  labels: React.PropTypes.object,
};

export default Nav;
