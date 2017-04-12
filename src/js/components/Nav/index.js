import React from 'react';
import {Link} from 'react-router-dom';
import './nav.scss';

/** Home component */
class Nav extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props: Object) {
    super(props);
    this.state = {
      showSideBar: false,
    };

    this._toggleSideBar = this._toggleSideBar.bind(this);
  }

  /** show or hide side bar */
  _toggleSideBar() {
    this.setState({
      showSideBar: !this.state.showSideBar,
    });
  }

  /** @return {html} Nav */
  render() {
    const {links, close} = this.props.labels;
    return (
      <div className="nav-container">
        <div className="nav-top">
          <div className="nav-navbar">
            <div className="nav-left">
              <Link className="nav-link" to="/" />
            </div>
            <div className="nav-right nav-large">
              {links.map((link) => <Link
                  key={link.to}
                  className="nav-link"
                  to={link.to}
                >
                  {link.icon? <i className={`fa fa-${link.icon}`}></i> : null}
                  {` ${link.title}`}
                </Link>
              )}
            </div>
            <div className="nav-right nav-small" onClick={this._toggleSideBar}>
              <i className="fa fa-bars nav-link"></i>
            </div>
          </div>
        </div>
        <div className={'nav-sidebar' + (this.state.showSideBar? ' slide-right' : '')}>
          <div className='nav-close nav-link' onClick={this._toggleSideBar}>
            {close}
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
          {links.map((link) => <div key={link.to} onClick={this._toggleSideBar}>
            <Link
              className="nav-link"
              to={link.to}
            >
              {link.title}
            </Link>
          </div>
          )}
        </div>
      </div>
    );
  }
}

Nav.propTypes = {
  labels: React.PropTypes.object,
};

export default Nav;
