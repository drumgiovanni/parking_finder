import React, {Component} from 'react';

class SearchFromName extends Component {
    constructor(props) {
        super(props);
        this.state={
            place:""
        };
    }

    handlePlaceChanged(place){
        this.setState( {place} );
    };

    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.place);
        this.setState({place:""})
    }
    render(){
        return(
            <div className="centerdComponents" id="SearchFromName">
                <ul>
                    <li>地名から探す</li>
                </ul>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" value={this.state.place} onChange={(e) => this.handlePlaceChanged(e.target.value)} />
                    <input type="submit" value="検索" />
                </form>
            </div>
        );
    }

}
export default SearchFromName;
