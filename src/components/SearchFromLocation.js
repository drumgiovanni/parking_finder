import React, {Component} from 'react';

import getlocation from '../modules/getlocation';

class SearchFromLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    handleLocSubmit(e){
        e.preventDefault();
        
        this.setState({place: getlocation()})
        console.log(getlocation())
        this.props.onSubmit(getlocation())
    }
    render(){
        return (
            <div className="centerdComponents" id="SearchFromLocation">
                <ul>
                    <li>現在地から探す</li>
                </ul>
                <form　onSubmit={e => this.handleLocSubmit(e)}>
                    <input type="submit" value="現在地から検索" />
                </form>
            </div>
        )
    }
} 

export default SearchFromLocation;
