import React from 'react';
import {Link} from 'react-router-dom';

/** Nav Sidebar component */
class NavSide extends React.Component {
  /** @return {html} NavSide */
  render() {
    const {links, close} = this.props.labels;
    return (
      <div className={'nav-sidebar' + (this.props.show? ' slide-right' : '')}>
        <div className='nav-close nav-link' onClick={this.props.toggleSideBar}>
          {close}
          <i className="fa fa-times" aria-hidden="true"></i>
        </div>
        {links.map((link) =>
          <div key={link.to} onClick={this.props.toggleSideBar}>
            <Link
              className="nav-link"
              to={link.to}
            >
              {link.title}
            </Link>
          </div>
        )}
      </div>
    );
  }
}

NavSide.propTypes = {
  show: React.PropTypes.bool,
  labels: React.PropTypes.object,
  toggleSideBar: React.PropTypes.func,
};

export default NavSide;
