// @flow

import React from 'react';
import NavTop from './top.js';
import NavSide from './side.js';
import LangButton from './langBtn.js';

import './nav.scss';

/** Nav component */
class Nav extends React.Component {
  state: {
    showSideBar: boolean,
  };
  _toggleSideBar: () => void;

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
    const {links, langToggle} = this.props.labels;
    return (
      <div className="nav-container">
        <div className="nav-top">
          <NavTop links={links} toggleSideBar={this._toggleSideBar} />
          <LangButton
            label={langToggle}
            lang={this.props.lang}
            onLangChange={this.props.onLangChange}
          />
        </div>
        <NavSide
          labels={this.props.labels}
          toggleSideBar={this._toggleSideBar}
          show={this.state.showSideBar}
        />
      </div>
    );
  }
}

Nav.propTypes = {
  labels: React.PropTypes.object,
  lang: React.PropTypes.string,
  onLangChange: React.PropTypes.func,
};

export default Nav;
