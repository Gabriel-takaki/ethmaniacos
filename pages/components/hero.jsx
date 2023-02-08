import React from "react";
import Image from "next/image";
import bg1Desktop from "public/bg1&2.webp";
import setaScroll from "public/setascroll.webp";
import etherum from "public/etherum.webp";
import baseEtherum from "public/baseetherum.webp";
import { AiOutlineYoutube } from "react-icons/ai";

const Hero = () => {
    return (
        <div className="home full-width">

 
      <div className="animationEtherumHero">
      <div className="full-width etherumdiv h100 flex">
      <Image 
            className="image baseetherum"
            src={baseEtherum}
            />
      <Image 
            className="image etherum"
            src={etherum}
            />
            </div>
           
      </div>

      
        <Image 
            className="bg1ToDesktop bgInverter "
            src={bg1Desktop}
            />
         
         
        

        <a href="#aboutEth">

          <Image 
            className="setaScroll"
            src={setaScroll}
            />
            </a>

         

            <div className="firstContent">
                 {/* {{Content}} */}
                 <span className="firstContentSpan">"O banco Central perfeito está sendo criado <br /> na nossa frente !<br /> Entenda o que está acontecendo no  <br /> Ethereum e aproveite as oportunidades !" <br /> </span>

                <a target="_blank" href="https://www.youtube.com/@ethmaniacos/playlists">
                 <button className="youtubeButton flexBetween"> <AiOutlineYoutube className="ytIcon" /> Ethmaniacos no YouTube</button>
                </a>
            </div>
        </div>

        
    )
}

export default Hero;