import React from 'react';
import ResourcesStore from './../Stores/ResourcesStore.js';

class NavBar extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            food: ResourcesStore.getFood(),
            wood: ResourcesStore.getWood(),
            stone: ResourcesStore.getStone()
        };
        this._onChange = this._onChange.bind(this);

    }

    componentDidMount() {

        ResourcesStore.addChangeListener(this._onChange);

    }

    componentWillUnmount() {

        ResourcesStore.removeChangeListener(this._onChange);

    }

    _onChange() {

        this.setState({
            food: ResourcesStore.getFood(),
            wood: ResourcesStore.getWood(),
            stone: ResourcesStore.getStone()
        });

    }

    render() {

        return(
            <ul>
                <li>
                    <p>Food: {this.state.food}</p>
                </li>
                <li>
                    <p>Wood: {this.state.wood}</p>
                </li>
                <li>
                    <p>Stone: {this.state.stone}</p>
                </li>
            </ul>
        );

    }

}

export default NavBar;