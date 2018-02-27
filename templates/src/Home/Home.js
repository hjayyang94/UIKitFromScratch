import React, { Component } from 'react';
import "./Home.css";
import Navbar from '../NavBar/NavBarBlizzard/NavBarBlizzard';
import Content from '../Content/About/About';

var backgroundStyle = {
    backgroundImage: "url('background2.jpg')",
    backgroundSize: "cover"

};

class Home extends Component {

    parentTitleHandler = () => {
        console.log("Parent Title was clicked");
    }

    render() {
        return (
            <div className='Home' style={backgroundStyle}>

                <div className='Header'>
                    <Navbar/>
                </div>

                <div className='Content'>
                    <Content/>
                </div>

                {/* <div className='Footer'>Footer</div> */}
            </div>
        )
    }
}




export default Home;