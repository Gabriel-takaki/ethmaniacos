import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoNavBar from "public/logonavbar.webp"
import ethIcone from "public/ethicone.webp"
import axios from "axios";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [btcValue, setBtcValue] = useState("");
  const [ethPricePink, setEthPricePink] = useState(false);
  const [gasPrice, setGasPrice] = useState("");

  const myStyles = {
    color: ethPricePink ? "#c87af8" : "white"
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await window.fetch("https://data.messari.io/api/v1/assets/eth/metrics");
      const messariRes = await res.json();
      const payload = messariRes.data;
      console.log(payload);
      setBtcValue(`${payload.market_data.price_usd.toLocaleString()}`);
      setEthPricePink(prevState => !prevState );

    // await axios.get(`https://api.etherscan.io/api?module=gastrackeraction=gasoracle&apikey=2UGKWJAH19UZ1AKMXQQNJBC6A85VJNQNH8`).then((res) => {
    //   console.log(res);
    // })
    // console.log(response.data);
      // const ethGasStationRes = await secondres.json();
      // console.log(ethGasStationRes)
      // setGasPrice(ethGasStationRes.average / 10);
      // console.log(ethGasStationRes);
    };
  
    fetchData();
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
          O ETHERUM
        </a>
        <a href="#graphics" className="linksi">
          MÉTRICAS
        </a>
        <a href="#whoweare" className="linksi">
          QUEM SOMOS
        </a>
      </div>

      <div className="flexBetween ethnavprice">
            <Image
                src={ethIcone}
                alt="ETH logo"
                className="ethIconeNavPrice"
                />
        <span style={myStyles} > {btcValue} USD {gasPrice}</span>
      </div>


    </nav>
  );
};

export default NavBar;
