// src/component/Gallery.js
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class myCarousel extends React.Component {
    render() {
        return (
            <div>
                
                <h2 className="blackfont">My Photo Gallery</h2>
                <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
                    <div>
                        <p className="legend">My Photo 1</p>
                    </div>
                    <div>
                        <p className="legend">My Photo 2</p>
                    </div>
                    <div>
                        <p className="legend">My Photo 3</p>
                    </div>
                    <div>
                        <p className="legend">My Photo 4</p>
                    </div>
                    <div>
                        <p className="legend">My Photo 5</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default myCarousel