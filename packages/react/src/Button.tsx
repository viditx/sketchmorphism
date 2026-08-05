import React from "react";
import { generateWobbleFilter } from "core";

export const Button = ({ children, onClick, className }: any) => {
  const filterId = "wobble-btn";
  
  return (
    <>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs dangerouslySetInnerHTML={{ __html: generateWobbleFilter(filterId) }} />
      </svg>
      <button 
        onClick={onClick}
        className={className}
        style={{
          filter: `url(#${filterId})`,
          border: "2px solid #1a1a1a",
          padding: "10px 20px",
          background: "#fff",
          borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
          cursor: "pointer",
          fontFamily: "inherit"
        }}
      >
        {children}
      </button>
    </>
  );
};
