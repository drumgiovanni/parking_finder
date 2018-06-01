import React, {Component} from 'react';

class ListField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: props.parkings
        }
    }

    render() {
        return (
            <div id="ListField">
                <ul>
                
                </ul>
            </div>
        )
    }
}

export default ListField;
