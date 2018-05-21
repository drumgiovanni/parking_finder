import React, {Component} from 'react';

class ListField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItem: ['A駐輪場', 'B駐輪場', 'C駐輪場', 'D駐輪場', 'E駐輪場']
        }
    }

    render() {
        return (
            <div id="ListField">
                <ul>
                {this.state.listItem.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
                </ul>
            </div>
        )
    }
}

export default ListField;
