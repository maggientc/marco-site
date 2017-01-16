import React from 'react';
import './home.scss';

/** Home component */
class Home extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props) {
    super(props);
  }

  /** @return {html} Home */
  render() {
    return (
      <header className="home-display-container" id="home"></header>
    );
  }
}

export default Home;
