import React from 'react';
import {Link} from 'react-router-dom';

/** Nav Top menu component */
class NavTop extends React.Component {
  /** @return {html} NavTop */
  render() {
    const links = this.props.links;
    return (
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
        <div className="nav-right nav-small" onClick={this.props.toggleSideBar}>
          <i className="fa fa-bars nav-link"></i>
        </div>
      </div>
    );
  }
}

NavTop.propTypes = {
  links: React.PropTypes.array,
  toggleSideBar: React.PropTypes.func,
};

export default NavTop;
