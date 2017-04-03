// @flow

import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
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

    const {component, page} = Translation.getContent('en');
    return (
      <div>
        <Nav labels={component.nav} />
        <Home />
        <About labels={page.about} />
        <Contact labels={page.contact} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
