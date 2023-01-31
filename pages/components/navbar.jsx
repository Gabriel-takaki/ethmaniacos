import React, { useState, useEffect } from "react";
// import ethnavlogo from "../assets/ethnavlogo.png";

const NavBar = () => {
  const [btcValue, setBtcValue] = useState("");
  const [navBarOpen, setNavBarOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await window.fetch("https://data.messari.io/api/v1/assets/eth/metrics");
      const messariRes = await res.json();
      const payload = messariRes.data;
      console.log(payload);
      setBtcValue(
        `${payload.market_data.price_usd.toLocaleString()}`
        // "$" + payload.marketcap.current_marketcap_usd.toLocaleString()

      );
    };

    fetchData();
    const intervalId = setInterval(fetchData, 7500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="navBar flexBetween full-width">
      <div className="logo">
        {/* <img src={ethnavlogo} alt="" /> */}
      </div>

      <div className="hamburger" onClick={() => setNavBarOpen(!navBarOpen)}>
        <i className={`fas fa-${navBarOpen ? "times" : "bars"}`} />
      </div>

      <div className={`flexBetween links ${navBarOpen ? "open" : ""}`}>
        <a href="#home" className="linksi">
          INÍCIO
        </a>
        <a href="#oethhistory" className="linksi">
          O ETHERIUM
        </a>
        <span className="linksi">GRÁFICOS</span>
        <span className="linksi">NOTÍCIAS</span>
        <span className="linksi">ETHEXPERT</span>
      </div>

      <div className="flexBetween ethnavprice">
        {/* <img src={cursor} className="h100" alt="" /> */}
        <span className="blink">{btcValue} USD</span>
      </div>
    </nav>
  );
};

export default NavBar;
