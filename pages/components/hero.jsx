import React from "react";
// import Content from "./content";
// import bg1 from "../assets/bg1.webm";

const Hero = () => {
    return (
        <div className="home full-width">
              <video className="videoHome" src="/bg1.webm"  muted autoPlay loop >
        {/* <source src="/bg1.webm" /> */}
      </video>

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