import React, { useRef, useEffect } from 'react';
import {AiFillFire} from "react-icons/ai"

function Gauge({ value }) {
  const gaugeRef = useRef();

  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 100) {
      return;
    }

    gauge.querySelector(".gauge__fill").style.transform = `rotate(${
      value / 200
    }turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
      value 
    )}`;
  }

  useEffect(() => {
    setGaugeValue(gaugeRef.current, value);
  }, [value]);

  return (
    <div className="gauge" ref={gaugeRef}>
      <div className="gauge__body">
        <div className="gauge__fill"></div>
        <div className="gauge__cover"></div>
      </div>
    </div>
  );
}

export default Gauge;