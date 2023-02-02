import React from "react";
import bg2Desktop from "public/bg2Desk.webp";
import Image from "next/image";
import cuboGrandeFlutuante from 'public/cuboGrandeFlutuante.webp';
import cuboGrandeFlutuantePng from 'public/cuboGrandeFlutuante.png';
import ScrollAnimation from 'react-animate-on-scroll';

// import ethflutuante from "../assets/ethflutuante.png";

const AboutEthManiacos = () => {
    return (
        <div className="aboutEth full-width">

            <Image 
            className="cuboFlutuante0"
            src={cuboGrandeFlutuante}
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
          

            <div className="ethFlutuanteSection flex-between full-width h100" >
                {/* <img src={ethflutuante} alt="" /> */}
                {/* <img className="inverter" src={ethflutuante} alt="" /> */}
            </div>

        </div>

        
    )
}

export default AboutEthManiacos;