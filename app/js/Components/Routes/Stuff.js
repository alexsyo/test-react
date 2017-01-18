import React from 'react';
import ResourcesAction from './../../Actions/ResourcesActions.js';

class Stuff extends React.Component {

    constructor(props) {

        super(props);
        this.gather = this.gather.bind(this);
    }

    gather(resourceType) {
        ResourcesAction.store(resourceType, 1);
    }

    render() {

        return(
            <div>
                <p>Godd stuff...</p>
                <button onClick={this.gather.bind(null, 'food')}>Gather Food</button>
                <button onClick={this.gather.bind(null, 'wood')}>Gather Wood</button>
                <button onClick={this.gather.bind(null, 'stone')}>Gather Stone</button>
            </div>
        );

    }

}

export default Stuff;