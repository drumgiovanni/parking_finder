import React, {Component} from 'react';
import axios from 'axios';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json?&key=AIzaSyDsYWABja0Or2bxtRO5bhFnojftUfOtgjM';
class SearchFromName extends Component {
    constructor(props) {
        super(props);
        this.state={
            place: "",
            lat: props.lat,
            lng: props.lng
        };
    }

    handlePlaceChanged(place){
        this.setState({ place });
    };

    handleSubmit(e){
        e.preventDefault();
        axios.get(GEOCODE_ENDPOINT, {params: { address: this.state.place }})
			.then(results => {
				const data = results.data;
				switch (data.status) {
					case 'OK': {
						const result = results.data.results[0].geometry.location;
						this.setState({
							lat: result.lat,
							lng: result.lng
						});
                        this.props.onSubmit(this.state.lat, this.state.lng);

						break;
					}
					case 'ZERO_RESULTS': {
						this.setState({ 
							lat: 0,
							lng: 0	
						});
						break;
					}
					default: {
						this.setState({
							lat: 0,
							lng: 0
						});
					}
				};
			})
			.catch(error => {
				this.setState({
							lat: 0,
							lng: 0
						});
			});

        this.setState({place:""})
    }
    render(){
        return(
            <div className="centerdComponents" id="SearchFromName">
                <ul>
                    <li>地名から探す</li>
                </ul>
                <form className="subform" onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" value={this.state.place} onChange={(e) => this.handlePlaceChanged(e.target.value)} />
                    <input type="submit" value="検索" />
                </form>
            </div>
        );
    }

}
export default SearchFromName;
