import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';
import './home.scss';

/** Home component */
class Home extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props) {
    super(props);
  }

  /** @return {html} Home */
  render() {
    const {contactBtn} = this.props.labels;
    return (
      <header className="home-display-container" id="home">
        <div role='contact-btn'>
          <Link to="/#contact" className='link-btn'>{contactBtn}</Link>
        </div>
      </header>
    );
  }
}

Home.propTypes = {
  labels: React.PropTypes.object,
};

export default Home;
