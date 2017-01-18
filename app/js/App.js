import React from 'react';
import NavBar from './Components/NavBar.js';
import ResourcesView from './Components/ResourcesView.js';

class App extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            <div>
                <NavBar />
                <ResourcesView />
                {this.props.children}
            </div>
        );

    }

}

export default App;