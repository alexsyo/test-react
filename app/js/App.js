import React from 'react';
import NavBar from './Components/NavBar.js';

class App extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            <div>
                <NavBar />
                {this.props.children}
            </div>
        );

    }

}

export default App;