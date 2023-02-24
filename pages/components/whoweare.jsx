import React from "react";
// import bg2 from "../assets/bg2.mp4";
// import Content from "./content";
import Image from "next/image";
import bg1Desktop from "public/bg1&2.webp";

const WhoWeAre = () => {
    return (

   
        <div className="whoweare flex" >
        <div className="contentWhoWeAre flex h100 full-width">
         
        </div>
        <div className="text-container">
            <h1>ETHmaníacos: </h1>
            <h2>Acreditamos no futuro Web3 e na revolução digital!</h2>
            <p> Somos loucos por Ethereum <br /> e pelo universo Crypto  </p>
            <span>Para nós o e Ethereum não <br /> é apenas uma plataforma de investimento <br /> é o futuro da tecnologia </span>
            <p>Nosso objetivo é enxergar e agarrar <br /> todas as oportunidades dentro deste momento único e histórico onde a sociedade se divide em</p>
            <div class="typewriter">
            <h1 className="h1typewriter">Antes e depois do Ethereum...</h1>
            </div>
          </div>

       
      </div>
    
        
    )
}

export default WhoWeAre;