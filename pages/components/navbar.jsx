import React, { useState, useEffect } from "react";
import Image from "next/image";
import logoNavBar from "public/logonavbar.webp"
import ethIcone from "public/ethicone.webp"

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [btcValue, setBtcValue] = useState("");
  const [ethPricePink, setEthPricePink] = useState(false);
  
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
          O ETHERIUM
        </a>
        <span className="linksi">GRÁFICOS</span>
        <span className="linksi">NOTÍCIAS</span>
        <span className="linksi">ETHEXPERT</span>
      </div>

      <div className="flexBetween ethnavprice">
            <Image
                src={ethIcone}
                alt="ETH logo"
                className="ethIconeNavPrice"
                />
        <span style={myStyles} >{btcValue} USD</span>
      </div>
    </nav>
  );
};

export default NavBar;
