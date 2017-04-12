import React from 'react';
import IconItem from '../../components/IconItem';
import './about.scss';

/** Home component */
class About extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props) {
    super(props);
  }

  /** @return {html} About */
  render() {
    const {title, subTitle, features} = this.props.labels;

    return (
      <div className='container' id='about'>
        <h3 className='container-title'>{title}</h3>
        <p className='container-subTitle'>{subTitle}</p>
        <div className='container-list'>
          { features.map((item, index) => <IconItem {...item} key={index} />) }
        </div>
      </div>
    );
  }
}

About.propTypes = {
  labels: React.PropTypes.object,
};

export default About;
