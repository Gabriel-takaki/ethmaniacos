import React from "react";
import bg2Desktop from "public/bg2Desk.webp";
import Image from "next/image";
import cuboGrandeFlutuante from 'public/cuboGrandeFlutuante.webp';
import bg1Desktop from "public/bg1&2.webp";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// import ethflutuante from "../assets/ethflutuante.png";

const AboutEthManiacos = () => {
    return (
        <div className="aboutEth full-width">

        <Image 
            className="bg1ToDesktop"
            src={bg1Desktop}
            />


            <Image 
            className="cuboFlutuante1"
            src={cuboGrandeFlutuante}
            />

            <Image 
            className="cuboFlutuante2"
            src={cuboGrandeFlutuante}
            />

            <Image 
            className="cuboFlutuante3"
            src={cuboGrandeFlutuante}
            />
          


   
            
            <div className="carroussel">
            {/* <h2 className="blackfont">My Photo Gallery</h2> */}
                {/* <Carousel autoPlay interval="5000" transitionTime="5000" infiniteLoop>
                    <div>
                        <img src="" alt="asd" />
                     
                         <p>lalallalalal</p>
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
                </Carousel> */}
            </div>
         
        </div>

        
    )
    
}

export default AboutEthManiacos;