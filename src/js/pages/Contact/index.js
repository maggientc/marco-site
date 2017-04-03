import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from 'react-google-maps';
import './contact.scss';

const GettingStartedGoogleMap = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={3}
    defaultCenter={{lat: -25.363882, lng: 131.044922}}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));

/** Contact component */
class Contact extends React.Component {
  /** @param {obj} props from parent. */
  constructor(props) {
    super(props);
  }

  /** @return {html} Contact */
  render() {
    const labels = this.props.labels;
    const markers = [{
      position: {
        lat: 25.0112183,
        lng: 121.52067570000001,
      },
      key: `Taiwan`,
      defaultAnimation: 2,
    }];

    return (
      <div className='container container-light-gray' id='contact'>
        <h3 className='container-title'>{labels.title}</h3>
        <p className='container-subTitle'>{labels.subTitle}</p>
        <div className='contact-container'>
          <div className='contact-list'>
            <p><i className="fa fa-map-marker"></i>{labels.address}</p>
            <p><i className="fa fa-phone"></i>{labels.phone}</p>
            <p><i className="fa fa-envelope"> </i>{labels.email}</p>
          </div>
          <GettingStartedGoogleMap
            containerElement={<div className='contact-map' />}
            mapElement={<div style={{height: `100%`}} />}
            markers={markers}
          />
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  labels: React.PropTypes.object,
};

export default Contact;
