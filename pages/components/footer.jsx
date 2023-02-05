import React from "react";
// import bg2 from "../assets/bg2.mp4";
// import Content from "./content";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer flex">
            {/* <video className="firstVideo" src={bg2} autoPlay loop muted ></video> */}
                <p>Nossas redes sociais</p>
          <div className="socialMedia flexBetween">
            <AiOutlineYoutube/>     
            <AiOutlineInstagram/>   
            <AiOutlineTwitter/>   
          </div>
          <p>ETHmaniacos ® </p>
        </div>

        
    )
}

export default Footer;