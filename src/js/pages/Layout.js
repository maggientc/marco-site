// @flow

import React from 'react';
import Nav from '../components/Nav';
import Home from './Home';
import Translation from '../../lang/translation';

/** layout component */
class Layout extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props: Object) {
    super(props);
  }

  /** @return {html} app layout */
  render() {
    // const params = this.props.params;
    // console.log('page', params.page? params.page : 'no page');

    const {component} = Translation.getContent('en');
    return (
      <div>
        <Nav labels={component.nav}/>
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
