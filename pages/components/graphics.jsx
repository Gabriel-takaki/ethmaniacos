import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
let tvScriptLoadingPromise;

const ReactSpeedometer = dynamic(
  () => import('react-d3-speedometer'),
  { ssr: false },
);

const Graphics = () => {
  const percentage = 656;

  const onLoadScriptRef = useRef();

  const fetchData = async () => {
    const res = await window.fetch("https://data.messari.io/api/v1/assets/eth/metrics");
    const messariRes = await res.json();
    const payload = messariRes.data;
    console.log(payload);
  };

  useEffect(

    () => {
      fetchData()

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
            symbol: "CME:ETH1!",
            interval: "1",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "3",
            locale: "br",
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
        <div className='tradingview-widget-container h100'>
          <div id='tradingview_b2c58' className='h100' />
        </div>
      </div>
      <h2 className='graphicTitle'>Arraste o gráfico para ver a movimentação Ethereum 2022/23 </h2>

      <div className="secondGraphics flexBetween">

        <div className="secondGraphic">
          <div className="insideGraphic">
            <span className='orangeSpan'>33</span>
            <span className='blueSpan'>GWEI</span>
          </div>
        </div>

        <div className="secondGraphic">
          <div className="insideGraphic">
            <span className='secondOrangeSpan'>-7,353,78</span>
            <span className='blueSpan'>ETH</span>
          </div>
        </div>

        <div className="secondGraphic">
          <div className="insideGraphic">
            <span className='orangeSpan'>33</span>
            <span className='blueSpan'>ETH</span>
          </div>
        </div>
      </div>

      <div className="thirdGraphics flexBetween">

        <div className="thirdGraphic">
          <div className="insideGraphic">
            <ReactSpeedometer
              maxSegmentLabels={0}
              value={33}
              maxValue={100}
              segments={1055}
              fluidWidth={true}
              currentValueText="{33} Gas"
              ringWidth={10}
              needleHeightRatio={0.5}
              startColor={'#c87af8'}
              endColor={'#55cdff'}
              needleColor="#fff"
              textColor={'#fff'}
            />
          </div>
        </div>

        <div className="thirdGraphic">
          <div className="insideGraphic">
            <ReactSpeedometer
              className='speedometer'
              maxSegmentLabels={0}
              value={33}
              maxValue={100}
              height={100}
              segments={1055}
              fluidWidth={true}
              // paddingVertical={15}
              dimensionUnit={''}
              currentValueText="{33} Gas"
              needleHeightRatio={0.5}
              ringWidth={10}
              startColor={'orange'}
              endColor={'red'}
              needleColor="#fff"
              textColor={'#fff'}
            />

          </div>
        </div>

        <div className="thirdGraphic">
          <div className="insideGraphic">

            <ReactSpeedometer
              className='speedometer'
              maxSegmentLabels={0}
              value={33}
              maxValue={100}
              height={100}
              segments={1055}
              fluidWidth={true}
              // paddingVertical={15}
              dimensionUnit={''}
              currentValueText="{33} Gas"
              needleHeightRatio={0.5}
              ringWidth={10}
              startColor={'#55cdff'}
              endColor={'white'}
              needleColor="#fff"
              textColor={'#fff'}
            />

          </div>
        </div>



      </div>
    </div>


  )
}

export default Graphics;