import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/stuff">Stuff</Link>
                </li>
                <li>
                    <Link to="/friends">Friends</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        );

    }

}

export default NavBar;