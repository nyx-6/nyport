import React from "react";
import '../styles/Slide.css'
import GalleryElement from '../components/GalleryElement';

function Slide(props) {
    return (
        <div className="slide">
            <div className="slide__box">
                   
                <p className="text">
                <h2 className="slide__title">{props.slideTitle}</h2>
                <br/>
                    <GalleryElement /> 
                Can you type fast enough?<br/><br/> 
                Type10 is a typing online app 
                that will help you to improve
                your typing speed and precision
                using all your fingers.  <br/>   
                Type10 is perfect for everyone who
                wants to get a job that requires good
                typing skills. 
                <br/><br/> 
                </p>
             
                <p className="text">
                    <h2 className="slide__title">General Structure</h2>
                    <br /> 
                    
                </p>

        
            </div>
            <div className="slide__box">
                <h2 className="slide__title">Technologies</h2>
            </div>
        </div>
    )
}

export default Slide;