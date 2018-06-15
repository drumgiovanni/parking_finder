import React, {Component} from 'react';


class ListField extends Component{
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render(){
    return (
        <div id="ListField">
            <ul>
        {this.props.parkings.map((item, i) => 
            <li key={i}><a href={item.url}>{i} {item.name}</a></li>
        )}  
            </ul>
        </div>
    )
}
}
export default ListField;
