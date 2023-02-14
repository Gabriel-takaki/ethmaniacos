import React from "react";
import Image from "next/image";
import cuboGrandeFlutuante from 'public/cuboGrandeFlutuante.webp';
import bg1Desktop from "public/bg1&2.webp";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import malhaethmaniacos from "public/malhaethmaniacos.webp";

// import ethflutuante from "../assets/ethflutuante.png";

const AboutEthManiacos = () => {
    return (
        <div className="aboutEth full-width">

        <Image 
            className="bg1ToDesktop"
            src={bg1Desktop}
            />



        <Image 
            className="malhaflutuante1"
            src={malhaethmaniacos}
            />

            <Image 
            className="malhaflutuante2"
            src={malhaethmaniacos}
            />

         


   
            
            <div className="carroussel">
                <div></div>
                <Carousel showStatus={false}  showIndicators={false} dynamicHeight autoPlay interval="5000" transitionTime="3000" infiniteLoop >
                    <div className="carouselContent">
                        <h1>WEB 3.0 - O ÍNICIO</h1>
                         <p>Em vez de uma Web monoplizada por grandes empresas de tecnologia, a Web3 adota a descentralização e está sendo construida e operada, pasmem, como propriedade de seus usuários,</p>
                         <br />
                         <p>Como ? usando a rede Ethereum !</p>
                    </div>
                    <div className="carouselContent">
                        <h1>VITALIK: O CRIADOR</h1>
                        <p>No final de 2013 vitalic Buterin, publicou seu white paper descrevendo a ideia do ethereum, em janeiro de 2014 o Etherum foi anunciado pela primeira vez na the n </p>
                        <br />
                        <p>Como ? usando a rede Ethereum !</p>

                    </div>
                    <div className="carouselContent">
                        <h1>VITALIK: O CRIADOR</h1>
                        <p>No final de 2013 vitalic Buterin, publicou seu white paper descrevendo a ideia do ethereum, em janeiro de 2014 o Etherum foi anunciado pela primeira vez na the n </p>
                        <br />
                        <p>Como ? usando a rede Ethereum !</p>
                    </div>
                </Carousel>
                <div></div>
            </div>
         
        </div>

        
    )
    
}

export default AboutEthManiacos;