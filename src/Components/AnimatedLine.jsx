import React, { useEffect, useRef } from "react";

const AnimatedLine = ({theme}) => {
  const lineRef = useRef(null);
  console.log('line')

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      line.animate(
        [
          { width: "0px", opacity: 0 },
          { width: "100%", opacity: 1 }
        ],
        {
          duration: 1000,
          easing: "ease-out",
          fill: "forwards"
        }
      );
    }
  }, []);

  return (
    <div style={{ width: "100px", overflow: "hidden" }}>
      <div
        ref={lineRef}
        style={{
          height: "2px",
          backgroundColor:  theme ? '#086788' : '#FFFFFF', // royal purple
          width: "0px",
          opacity: 0,
        }}
      ></div>
    </div>
  );
};

export default AnimatedLine;
