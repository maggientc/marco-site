import React from 'react';
import './iconItem.scss';

const IconItem = ({icon, title, content}) => (
  <div className='iconItem-container'>
    <i className={`fa fa-${icon}`}></i>
    <p role='subTitle'>{title}</p>
    <p>{content}</p>
  </div>
);

IconItem.propTypes = {
  icon: React.PropTypes.string,
  title: React.PropTypes.string,
  content: React.PropTypes.string,
};

export default IconItem;
