import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoNavBar from "public/logonavbar.webp"
import newLogo from "public/newlogo.png"
import ethIcone from "public/ethicone.webp"
import axios from "axios";
import {FaGasPump} from "react-icons/fa";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [btcValue, setBtcValue] = useState("");
  const [ethPricePink, setEthPricePink] = useState(false);
  const [gasPrice, setGasPrice] = useState("");

  const myStyles = {
    color: ethPricePink ? "#c87af8" : "white"
  };

 
  const fetchGasPrice = async () => {
    const res = await window.fetch("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=2UGKWJAH19UZ1AKMXQQNJBC6A85VJNQNH8")
    const etherscanRes = await res.json();
    const payload = etherscanRes.result;
    setGasPrice(`${payload.ProposeGasPrice}`);
  };

 
  
  const fetchData = async () => {
    const res = await window.fetch("https://data.messari.io/api/v1/assets/eth/metrics");
    const messariRes = await res.json();
    const payload = messariRes.data;
    console.log(payload);
    setBtcValue(`${payload.market_data.price_usd.toLocaleString()}`);
    setEthPricePink(prevState => !prevState );
  };

 
  useEffect(() => {
    const intervalId = setInterval(fetchGasPrice, 12000);
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    const intervalId = setInterval(fetchData, 12000);
    return () => clearInterval(intervalId);
  }, []);
  
   useEffect(() => {
    fetchData();
    fetchGasPrice();
  }, []);

  
  return (
    <nav className="navBar flexBetween full-width">

                <Image
                src={newLogo}
                alt="ETH logo"
                className="imageLogo"
                />



                <Image
                src={ethIcone}
                alt="ETH logo"
                className="iconLogo"
                />
                

      <div className="hamburger" onClick={() => setNavBarOpen(!navBarOpen)}>
        <i className={`fas fa-${navBarOpen ? "times" : "bars"}`} />
      </div>

      <div className={`flexBetween links ${navBarOpen ? "open" : ""}`}>
        <a href="#hero" className="linksi">
          INÍCIO
        </a>
        <a href="#aboutEth" className="linksi">
          O ETHEREUM
        </a>
        <a href="#graphics" className="linksi">
          MÉTRICAS
        </a>
        <a href="#whoweare" className="linksi">
          QUEM SOMOS
        </a>
        <a href="https://br.investing.com/" target='blank' className="linksi">
          NOVIDADES
        </a>
      </div>

      <div className="flex ethnavprice">
      <span className="ethGas flex" style={myStyles} > <span className="gasIcon ethIconeNavPrice"> 
           <FaGasPump/> </span> {gasPrice}</span>
            <Image
                src={ethIcone}
                alt="ETH logo"
                className="ethIconeNavPrice"
                />
        <span className="flex" style={myStyles} > {btcValue} USD </span>
        
      </div>


    </nav>
  );
};

export default NavBar;
