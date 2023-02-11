import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoNavBar from "public/logonavbar.webp"
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

  const makeInfuraRequest = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'eth_blockNumber',
        params: [],
        id: 1
      })
    };
    fetch('https://mainnet.infura.io/v3/3d6f1e85b11d463391f25cf1c9df06de', requestOptions)
      .then(res => res.json())
      .then(payload => {
        console.log(payload)
        // const gasPrice = parseInt(payload.result, 16) / 1e9;
        const gasPrice = parseInt(payload.result, 16)
        let rounded = gasPrice.toFixed(0);
        let value = Math.floor(rounded / 1000000)
        // let rounded = (gasPrice % 1 < 0.5) ? Math.floor(gasPrice) : Math.ceil(gasPrice);
      setGasPrice(value);
      })
      .catch(error => console.error(error));
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
    const intervalId = setInterval(makeInfuraRequest, 1500);
    return () => clearInterval(intervalId);
  }, []);
  
  useEffect(() => {
    const intervalId = setInterval(fetchData, 1500);
    return () => clearInterval(intervalId);
  }, []);
  
  
  return (
    <nav className="navBar flexBetween full-width">

                <Image
                src={logoNavBar}
                alt="ETH logo"
                className="imageLogo"
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
      </div>

      <div className="flex ethnavprice">
            <Image
                src={ethIcone}
                alt="ETH logo"
                className="ethIconeNavPrice"
                />
        <span style={myStyles} > {btcValue} USD </span>
        <span className="ethGas flex" style={myStyles} > <span className="gasIcon ethIconeNavPrice"> 
           <FaGasPump/> </span> {gasPrice}</span>
      </div>


    </nav>
  );
};

export default NavBar;
