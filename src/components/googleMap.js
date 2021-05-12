import React from 'react';
import GoogleMapReact from 'google-map-react';

function googleMap(props) {
  return (
    <div style={{ height: '200px', width: '250px' }}>
      <GoogleMapReact
        defaultZoom={12}
        defaultCenter={{ lat: props.lat, lng: props.lon }}
      />
    </div>
  );
}

export default googleMap;
