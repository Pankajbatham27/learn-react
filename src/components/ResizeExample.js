import React, { useState, useEffect, useRef } from "react";

const useThrottle = (callback, limit) => {
  const lastCall = useRef(0);

  return (...args) => {
    const now = Date.now();
    if (now - lastCall.current >= limit) {
      lastCall.current = now;
      console.log(`Function executed (Throttle) at: ${now}`); 
      callback(...args);
    }
  };
};

const ThrottledResize = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateDimensions = () => {
    console.log("Updating dimensions...");
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const throttledResizeHandler = useThrottle(updateDimensions, 500);

  useEffect(() => {
    window.addEventListener("resize", throttledResizeHandler);
    // return () => {
    //   window.removeEventListener("resize", throttledResizeHandler);
    // };
  }, [throttledResizeHandler]);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Throttled Resize</h2>
      <p>
        <b>Width:</b> {dimensions.width} px | <b>Height:</b> {dimensions.height} px
      </p>
    </div>
  );
};

export default ThrottledResize;
