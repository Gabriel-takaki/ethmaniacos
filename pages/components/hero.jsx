import React from "react";
// import Content from "./content";
import Image from "next/image";
import bg1Desktop from "public/bg1&2.webp";
import bg1Mobile from "public/bg1Mob.webp";
import ethFlutuante from "public/ethflutuante.webp";
import rodaFlutuante from "public/rodaFlutuanteBg1.webp";


const Hero = () => {
    return (
        <div className="home full-width">
              {/* <video className="bg1ToDesktop" src="/bg1compressed.webm"  muted autoPlay loop >
        <source src="/bg1.webm" />
      </video> */}

        <Image 
            className="bg1ToDesktop bgInverter "
            src={bg1Desktop}
            />
            {/*

            <Image 
            className="bg1ToMobile"
            src={bg1Mobile}
            /> */}

            {/* <Image 
            className="ethflutuante0 ethflutuantefix"
            src={ethFlutuante}
            />

            <Image 
            className="ethflutuante1 ethflutuantefix"
            src={ethFlutuante}
            />

            <Image 
            className="ethflutuante2 ethflutuantefix"
            src={ethFlutuante}
            /> */}
          

          <Image 
            className="ethflutuante4 ethflutuantefix"
            src={ethFlutuante}
            />

          <Image 
            className="ethflutuante3 ethflutuantefix"
            src={ethFlutuante}
            />

            <div className="bgVideo">
                
            </div>

            <div className="firstContent">
                 {/* {{Content}} */}
                 <span className="firstContentSpan">"A revolução industrial permitiu-nos, <br /> pela primeira vez, começar a substituir o <br /> trabalho humano por máquinas."</span>
            </div>
        </div>

        
    )
}

export default Hero;