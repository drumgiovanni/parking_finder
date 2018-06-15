import React, { Component } from 'react';
import '../App.css';
import SearchFromName from './SearchFromName';
import SearchFromLocation from './SearchFromLocation';
import MapField from './MapField';
import ListField from './ListField';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: "",
            lng: 135.5041171,
            lat: 34.6524992,
            parkings: [],
        }
    }
    
    getPlace(lat, lng){
        this.setState( {lat: lat, lng: lng} );
        console.log('lat: ', lat);
        console.log('lng: ', lng);
    }

    getLocation(lat, lng){
        this.setState( {lat: lat, lng: lng} );
        console.log('lat: ', lat);
        console.log('lng: ', lng);

    }

    componentWillMount(){
        fetch('api/db', {accept: "application/json" })
        .then(response =>  response.json() )
        .then(text => {
            return this.setState({parkings: text})})
        .catch(err => {
            console.log(err)
        });
    }
    render() {
        return (
            <div id='App'>
                <h1 id="appTytle">駐輪場Finder</h1>
                <SearchFromName onSubmit={(lat,lng) => this.getPlace(lat,lng)} />
                <SearchFromLocation onSubmit={(lat, lng) => this.getLocation(lat, lng)} />
                <div id="content-wrapper">
                    <MapField
                        lat={this.state.lat}
                        lng={this.state.lng}
                    />
                    <ListField parkings={this.state.parkings}/>
                </div>
            </div> 
        );
    }
}

export default App;
