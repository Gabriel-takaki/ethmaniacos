import React, {useState, useEffect, useRef,  } from 'react';
import dynamic from 'next/dynamic';
let tvScriptLoadingPromise;
import {FaGasPump} from "react-icons/fa";
import {ImDroplet} from "react-icons/im";
import {AiFillFire} from "react-icons/ai"
import {TfiWorld} from "react-icons/ti"
import {TbWorld} from "react-icons/tb"
// const ReactSpeedometer = dynamic(
//   () => import('react-d3-speedometer'),
//   { ssr: false },
// );

const Graphics = () => {

  const GaugeChart = dynamic(() => import('react-gauge-chart'), { ssr: false });

const [gasPrice, setGasPrice] = useState("");
const [suplyPrice, setSuplyPrice] = useState("");

  const percentage = 656;

  const onLoadScriptRef = useRef();


  const fetchGasPrice = async () => {
    const res = await window.fetch("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=2UGKWJAH19UZ1AKMXQQNJBC6A85VJNQNH8")
    const etherscanRes = await res.json();
    const payload = etherscanRes.result;
    setGasPrice(`${payload.ProposeGasPrice}`);
  };

  const fetchDataGraphic = async () => {
    const res = await window.fetch("https://data.messari.io/api/v1/assets/eth/metrics");
    const messariRes = await res.json();
    const payload = messariRes.data;
    console.log(payload);
  };

  const fetchSuply = async () => {
    const res = await window.fetch("https://api.etherscan.io/api?module=stats&action=ethsupply&apikey=2UGKWJAH19UZ1AKMXQQNJBC6A85VJNQNH8")
    const etherscanRes = await res.json();
    console.log(etherscanRes);
    const payload = etherscanRes.result;
    console.log(payload);
    const etherValue = (Number(payload) / 10 ** 25).toFixed(0);
    setSuplyPrice(`${etherValue}0 k`);
  }
  useEffect(() => {
    const intervalId = setInterval(fetchGasPrice, 12000);
    return () => clearInterval(intervalId);
  }, []);
  

  useEffect(

    () => {
      fetchDataGraphic()
      fetchGasPrice();
      fetchSuply();
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_b2c58') && 'TradingView' in window) {
          new window.TradingView.widget({
            // width: 980,
            autosize: true,
            symbol: "CRYPTOCAP:ETH",
          
            timezone: "Etc/UTC",
            theme: "dark",
            style: "3",
            locale: "br",
            range: "1D",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            hide_top_toolbar: true,
            hide_legend: true,
            allow_symbol_change: true,
            container_id: "tradingview_b2c58"
          });
        }
      }
    },

    []
  );
  return (


    <div className="graphics">


      <div className="principalGraphics">
        <div className='tradingview-widget-container principalGraphicsContainer'>
          <div id='tradingview_b2c58' className='h100' />
        </div>
      </div>


    <div className="secondGraphicsDiv">
      <div className="burnDiv">

      <GaugeChart id="gauge-chart2" 
  nrOfLevels={20} 
  percent={0.86} 
/>
      </div>

      <div className="thirdGraphicsDiv">
        <div className="insideThird" style={{marginBottom:'10px'}}>

        </div>
        <div className="insideThird">
          
          </div>
      </div>
    </div>


    </div>


  )
}

export default Graphics;