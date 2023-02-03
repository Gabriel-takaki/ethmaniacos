import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;


const Graphics = () => {

    const onLoadScriptRef = useRef();

  useEffect(
    () => {
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
            <div className="tradingview-widget-copyright">
            </div>
            </div>
            </div>

            <div className="secondGraphics">
                <div className="second1">

                </div>
                <div className="second2">

                </div>
                <div className="second3">

                </div>
            </div>

            <div className="thirdGraphics">
                <div className="third1">

                </div>
                <div className="third2">

                </div>
                <div className="third3">
                    
                </div>
            </div>
        </div>

        
    )
}

export default Graphics;