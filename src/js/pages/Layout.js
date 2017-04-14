// @flow

import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Team from './Team';
import Work from './Work';
import Translation from '../../lang/translation';

/** layout component */
class Layout extends React.Component {
  state: {
    lang: string,
  };
  _onLangChange: (lang: string) => void;

  /** @param {obj} props from parent. */
  constructor(props: Object) {
    super(props);
    const lang = localStorage.getItem('lang') || 'en';

    this.state = {
      lang: lang,
    };

    this._onLangChange = this._onLangChange.bind(this);
  }

  /** @param {string} pathname from url */
  _moveToPage(pathname: Array<string>) {
    const nextPage = (() => {
      if (pathname[1]) return pathname[1];
      return 'home';
    })();

    const ele = document.querySelector(`#${nextPage}`);
    if (ele) ele.scrollIntoView();
  }

  /** @param {string} lang language */
  _onLangChange(lang: string) {
    this.setState({
      lang: lang,
    });
  }

  /** @param {obj} nextProps will receive */
  componentWillReceiveProps(nextProps: Object) {
    const pathname = nextProps.location.pathname.split('/');
    this._moveToPage(pathname);
  }

  /**
   * move to the right page when commponet did mount
   */
  componentDidMount() {
    const pathname = this.props.location.pathname.split('/');
    this._moveToPage(pathname);
  }

  /** @return {html} app layout */
  render() {
    // const params = this.props.params;
    // console.log('page', params.page? params.page : 'no page');

    const {component, page} = Translation.getContent(this.state.lang);
    return (
      <div>
        <Nav
          labels={component.nav}
          onLangChange={this._onLangChange}
          lang={this.state.lang}
        />
        <Home labels={page.home} />
        <About labels={page.about} />
        <Team labels={page.team} />
        <Work labels={page.work} />
        <Contact labels={page.contact} />
        <Footer />
      </div>
    );
  }
}

export default Layout;
