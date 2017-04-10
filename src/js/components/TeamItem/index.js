import React from 'react';
import './teamItem.scss';

const TeamItem = ({name, title, description, photo}) => (
  <div className='teamItem-container'>
    <div>
      <img src={require(`../../../img/${photo}`)} />
      <div role='contact'>
        <h3>{name}</h3>
        <p role='title'>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  </div>
);

TeamItem.propTypes = {
  photo: React.PropTypes.string,
  name: React.PropTypes.string,
  title: React.PropTypes.string,
  description: React.PropTypes.string,
};

export default TeamItem;
