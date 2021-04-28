import React from 'react';
import '../Styles/landingscreen.css'
import Google from '../Assets/google-reveiew.png'
import Facebook from '../Assets/facebook-reveiew.png'
import Tcwin from '../Assets/TC-Winner.gif'

const Landingscreen = () => {
    return (
        <div>
            <div className="item-one">
                <div className='landing-page-form'>
                    <div className='landing-page-form1'>
                    <h6>Let's Plan a Trip For You</h6>
                    <input placeholder="Pick A Destination Or Package"/><br />
                    <input placeholder="Enter Name"/><br />
                    <input placeholder="Enter 10 Digit Mobile Number"/><br />
                    <button className="button1">Plan My Trip</button><br />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingscreen;