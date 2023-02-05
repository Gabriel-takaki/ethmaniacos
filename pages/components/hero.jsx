import React from "react";
import Image from "next/image";
import bg1Desktop from "public/bg1&2.webp";
import ethFlutuante from "public/ethflutuante.webp";
import setaScroll from "public/setascroll.webp";
import { AiOutlineYoutube } from "react-icons/ai";


const Hero = () => {
    return (
        <div className="home full-width">

        <Image 
            className="bg1ToDesktop bgInverter "
            src={bg1Desktop}
            />
         
         
          <Image 
            className=" ethflutuante"
            src={ethFlutuante}
            />

          <Image 
            className="setaScroll"
            src={setaScroll}
            />

         

            <div className="firstContent">
                 {/* {{Content}} */}
                 <span className="firstContentSpan">"A revolução industrial permitiu-nos, <br /> pela primeira vez, começar a substituir o <br /> trabalho humano por máquinas." <br /> <span style={{fontSize: '1rem'}}>- Agostinho carrara </span> </span>

                <a target="_blank" href="https://www.youtube.com/@ethmaniacos/playlists">
                 <button className="youtubeButton flexBetween"> <AiOutlineYoutube className="ytIcon" /> Ethmaniacos no YouTube</button>
                </a>
            </div>
        </div>

        
    )
}

export default Hero;