import React, { Component } from 'react';
import '../App.css';
import SearchFromName from './SearchFromName';
import SearchFromLocation from './SearchFromLocation';
import MapField from './MapField';
import ListField from './ListField';
import geolib from 'geolib';
import _ from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: "",
            lng: 0,
            lat: 0,
            parkings: [],
        }
    }
    
    getData() {
        fetch('/api/db', {accept: "application/json" })
            .then(response =>  {
                return response.json()} )
            .then(data => {
                const fixedData = [];
                data.forEach(item => {
                   const distance = geolib.getDistance(
                        { latitude:this.state.lat ,longitude:this.state.lng },
                        { latitude:item.lat ,longitude:item.lng }
                    )
                    item['distance'] = distance;
                    fixedData.push(item)
                })
                const sortedData = (data, distance)=> _.sortBy(data, d => d[distance]);
                this.setState({ parkings: sortedData(fixedData, 'distance') })
            })
            .catch(err => {
                console.log(err)
            });
    }

    getPlace(lat, lng){
        this.setState( {lat: lat, lng: lng} );
        this.getData();
    }

    getLocation(lat, lng){
        this.setState( {lat: lat, lng: lng} );
        this.getData();
    }

    fetchGeo(){
        if ( navigator.geolocation ){
            navigator.geolocation.getCurrentPosition( position => {
                const data = position.coords ;
                const lat = data.latitude ;
                const lng = data.longitude ;
                this.setState({lng: lng, lat: lat});
                return {lng: lng, lat: lat};
            })
        }
    }

    componentWillMount(){
        this.fetchGeo();
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
                        parkings={this.state.parkings}
                    />
                    <ListField parkings={this.state.parkings}/>
                </div>
            </div> 
        );
    }
}

export default App;
