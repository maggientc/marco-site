import React from 'react';
import Nav from '../components/Nav';
import Home from './Home';

/** layout component */
class Layout extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props) {
    super(props);
  }

  /** @return {html} app layout */
  render() {
    return (
      <div>
        <Nav />
        <Home />
      </div>
    );
  }
}

Layout.propTypes = {
  params: React.PropTypes.shape({
    page: React.PropTypes.string,
  }),
};

export default Layout;
