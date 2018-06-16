import React from 'react';
import { withGoogleMap, GoogleMap, Marker, withScriptjs } from 'react-google-maps';
import API_KEY from './env'

const InnerMap = withScriptjs(withGoogleMap(props => 
  <GoogleMap
    defaultZoom={15}
    defaultCenter={ props.position }
    center={ props.position }
  >
  <Marker position={props.position} />
  {props.parkings.map((item, i) => 
        <Marker key={i} position={{ lat: item.lat, lng: item.lng }} options={{ icon: 'icon/parking.png' }} />
  )}    
  </GoogleMap>
      
));

const MapField = (props) => (
   // eslint-disable-next-line
    <InnerMap 
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}`}
        containerElement={<div style={{ height: `364px`, width: `364px`, margin: `25px` }} />}
        mapElement={<div style={{ height: `100%` }}/>}
        loadingElement={<div style={{ height: `100%` }}/>}
        position={ {lat: props.lat, lng: props.lng} }
        parkings={props.parkings}
    />
);

export default MapField; 
