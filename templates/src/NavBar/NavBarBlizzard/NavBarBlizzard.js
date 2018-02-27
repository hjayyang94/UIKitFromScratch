import React, { Component } from 'react';
import "./NavBarBlizzard.css";

import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
  } from 'react-router-dom'

class NavBarBlizzard extends Component {

    parentTitleHandler = () => {
        console.log("Parent Title was clicked");
    }

    render() {
        return (
            <div className='NavBarBlizzard'>
                <div className="NavBarItems">
                    <Link to='/' className="Items">About</Link>
                    <Link to='/projects' className="Items">Projects</Link>
                </div>

                <div className="NavBarContactItems">
                    <div className= "ContactItems">
                        <a href='https://www.linkedin.com/in/hyun-jay-yang/'><img className="linkLogo"src="./logo.png"></img></a>
                        <a href='https://github.com/hjayyang94'><img className="linkLogo"src="./github.png"></img></a>
                    </div>
                </div>


            </div>
        )
    }
}




export default withRouter(NavBarBlizzard);