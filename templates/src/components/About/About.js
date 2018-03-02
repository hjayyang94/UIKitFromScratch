import React, { Component } from 'react';
import "./About.css";

import Characteristic from './Characteristic/Characteristic';

class About extends Component {

    render() {
        return (
            <div className='About'>
                <div className='IntroDiv'>
                    <div className='PhotoDiv'>
                        <img className='Photo' src="ProfPic.jpeg" />
                    </div>

                    <div className='Intro'>
                        <h1>Jay Yang</h1>
                        <h3>Full Stack Developer • Game Developer</h3>
                      
                    </div>
                </div>

                <div className='CharContainer'>
                    <Characteristic photo='strategy.png' skill='Strategic' description='Play to win. From having played and coached professional esports teams, I approach all projects methodically and analytically, aiming for the highest point possible.' />
                    <Characteristic photo='tree.jpg' skill='Growing' description='A tree starts dying when it stops growing. Knowledge can only further progress what I can already do, and I would never shy away from a situation I can learn more from.' />
                    <Characteristic photo='flexible.png' skill='Flexible' description='Plans can change, and adaptability is key. Dynamic teams, agile environments, and new technology constantly being introduced, I am always on my toes ready for curveballs that may come at my way.' />
                </div>
            </div>
        )
    }
}




export default About;