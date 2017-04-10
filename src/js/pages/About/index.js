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
    const labels = this.props.labels;
    const iconList = [{
      icon: 'desktop',
      title: labels.responsiveTitle,
      contact: labels.responsiveContact,
    }, {
      icon: 'heart',
      title: labels.passionTitle,
      contact: labels.passionContact,
    }, {
      icon: 'diamond',
      title: labels.designTitle,
      contact: labels.designContact,
    }, {
      icon: 'cog',
      title: labels.supportTitle,
      contact: labels.supportContact,
    }];

    return (
      <div className='container' id='about'>
        <h3 className='container-title'>{labels.title}</h3>
        <p className='container-subTitle'>{labels.subTitle}</p>
        <div className='container-list'>
          { iconList.map((item) => <IconItem {...item} key={item.icon} />) }
        </div>
      </div>
    );
  }
}

About.propTypes = {
  labels: React.PropTypes.object,
};

export default About;
