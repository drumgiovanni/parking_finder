import React, {Component} from 'react';

class SearchFromLocation extends Component{
    constructor(props){
        super(props);
        this.state = {
            location:"大阪"
        }
    }
    handleLocSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.location)
    }
    render(){
        return (
            <div class="centerdComponents">
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
