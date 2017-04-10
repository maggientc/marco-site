import React from 'react';
import './workItem.scss';

const WorkItem = ({name, description, photo}) => (
  <div className='workItem-container'>
    <div>
      <img src={require(`../../../img/${photo}`)} />
      <div role='contact'>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

WorkItem.propTypes = {
  photo: React.PropTypes.string,
  name: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default WorkItem;
