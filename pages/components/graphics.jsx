import React, {useState, useEffect, useRef,  } from 'react';
import dynamic from 'next/dynamic';
let tvScriptLoadingPromise;
import {FaGasPump} from "react-icons/fa";
import {ImDroplet} from "react-icons/im";
import {AiFillFire} from "react-icons/ai"
import {TfiWorld} from "react-icons/ti"
import {TbWorld} from "react-icons/tb"
import {MdOutlineAttachMoney} from "react-icons/md"
import Gauge from './Gauge';



const Graphics = () => {


const [gasPrice, setGasPrice] = useState("");
const [suplyPrice, setSuplyPrice] = useState("");

  const percentage = 656;

  const onLoadScriptRef = useRef();

  const [openPrice, setOpenPrice] = useState(null);


  useEffect(() => {
    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD,EUR')
      .then(response => response.json())
      .then(data => {
        console.log(data.DISPLAY.ETH)
        setOpenPrice(data.DISPLAY.ETH.USD.OPENDAY.replace('$', ''))
      }
      );
  }, []);


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


      <div className=' marketCapDiv'>
        <span className='marketCapSpan'>Market cap</span>
        <div className='marketCapLine'></div>
      </div>

      <div className="principalGraphics">
        <div className='tradingview-widget-container principalGraphicsContainer'>
          <div id='tradingview_b2c58' className='h100' />
        </div>
      </div>


    <div className="secondGraphicsDiv">
      <div className="burnDiv flex">
      <Gauge value={gasPrice} />

      <div className="flex" style={{paddingTop: '30px'}}>
        <span className='burnSpan'>GWEI</span>
      <AiFillFire className='burnIcon'/>

      </div>
      </div>

      <div className="thirdGraphicsDiv">
        <div className="insideThird supplyDiv " style={{marginBottom:'10px'}}>

      <div className='box1'></div>
      <span className='supplySpan'>Total Supply {suplyPrice}</span>


        </div>


        <div className="insideThird openDiv">
          <span className='openSpan'>Abertura hoje </span>
          <span className='openPrice flex'> <MdOutlineAttachMoney className='moneyIcon'/> {openPrice}</span>
          </div>
      </div>
    </div>


    </div>


  )
}

export default Graphics;