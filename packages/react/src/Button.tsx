import React, { useEffect } from "react";
import { injectSketchFilters } from "@sketchmorphism/core";

export const Button = ({ children, onClick, className = "", style = {} }: any) => {
  useEffect(() => {
    injectSketchFilters();
  }, []);

  return (
    <>
      <style>{`
        .sketch-btn {
          filter: url(#sketch-squiggly);
          border: 2px solid #1a1a1a;
          padding: 10px 20px;
          background: #fff;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          cursor: pointer;
          font-family: inherit;
          transition: filter 0.2s ease, transform 0.1s ease;
          color: #1a1a1a;
          font-weight: 600;
        }
        .sketch-btn:hover {
          filter: url(#sketch-squiggly-hover);
          transform: scale(1.02) rotate(-1deg);
        }
        .sketch-btn:active {
          transform: scale(0.98) rotate(1deg);
        }
      `}</style>
      <button 
        onClick={onClick}
        className={`sketch-btn ${className}`}
        style={style}
      >
        {children}
      </button>
    </>
  );
};
