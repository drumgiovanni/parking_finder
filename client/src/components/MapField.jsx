import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={15}
    defaultCenter={ props.position }
    center={ props.position }
  >
    {props.isMarkerShown && <Marker position={ props.position } />}
  </GoogleMap>
));

const MapField = ({lat, lng}) => (
   // eslint-disable-next-line
    <InnerMap 
        isMarkerShown
        containerElement={<div style={{ height: `364px`, width: `364px`, margin: `25px` }} />}
        mapElement={<div style={{ height: `100%` }}/>}
        position={ {lat: lat, lng: lng} }
    />
);

export default MapField; 
