import React, { Component } from 'react';
import './App.css';

import SearchFromName from './SearchFromName';
import SearchFromLocation from './SearchFromLocation';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            place: ""
        }
    }
    
    getPlace(place){
        this.setState({place});
        console.log('place:', place)
    }

    getLocation(place){
        this.setState( {place} );
        console.log('place:', place)
    }
    render() {
        return (
            <div>
                <h1 id="appTytle">駐輪場Finder</h1>
                <SearchFromName onSubmit={place => this.getPlace(place)} />
                <SearchFromLocation onSubmit={place => this.getLocation(place)} />
            </div> 
        );
    }
}

export default App;
