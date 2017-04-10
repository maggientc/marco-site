import React from 'react';
import './teamItem.scss';
import image from '../../../img/team.jpg';

const TeamItem = ({name, title, description}) => (
  <div className='teamItem-container'>
    <div>
      <img src={image} />
      <div role='contact'>
        <h3>{name}</h3>
        <p role='title'>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

TeamItem.propTypes = {
  name: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default TeamItem;
