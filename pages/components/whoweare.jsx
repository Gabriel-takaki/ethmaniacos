import React from "react";
// import bg2 from "../assets/bg2.mp4";
// import Content from "./content";
import Image from "next/image";
import bg1Desktop from "public/bg1&2.webp";
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'

const WhoWeAre = () => {
    return (

   
        <div className="whoweare flex" >
        <div className="contentWhoWeAre flex h100 full-width">
         
        </div>
        <div className="text-container">
            <h1>ETHmaníacos: </h1>
            <p> Somos loucos por Etherum <br /> e pelo universo Crypto  </p>
            <h3>Acreditamos no futuro Web3 e na revolução digital!</h3>
            <span>Para nós o e etherum não é apenas uma plataforma de investimento <br /> é o futuro da tecnologia </span>
            <p>Nosso objetivo é enxergar e agarrar todas as oportunidades dentro deste momento único e histórico onde a sociedade se divide em</p>
            <div class="typewriter">
            <h1>Antes e depois do Etherum...</h1>
            </div>
          </div>

       
      </div>
    
        
    )
}

export default WhoWeAre;