import React from 'react';
import WorkItem from '../../components/WorkItem';

/** Work component */
class Work extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props) {
    super(props);
  }

  /** @return {html} Work */
  render() {
    const {works, title, subTitle} = this.props.labels;

    return (
      <div className='container' id='work'>
        <h3 className='container-title'>{title}</h3>
        <p className='container-subTitle'>{subTitle}</p>
        <div className='container-list'>
          { works.map((item, index) => <WorkItem {...item} key={index} />) }
        </div>
      </div>
    );
  }
}

Work.propTypes = {
  labels: React.PropTypes.object,
};

export default Work;
