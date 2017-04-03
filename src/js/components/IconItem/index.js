import React from 'react';
import './iconItem.scss';

const IconItem = ({icon, title, contact}) => (
  <div className='iconItem-container'>
    <i className={`fa fa-${icon}`}></i>
    <p role='subTitle'>{title}</p>
    <p>{contact}</p>
  </div>
);

IconItem.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  contact: React.PropTypes.string,
};

export default IconItem;
