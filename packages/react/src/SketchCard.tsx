import React, { useEffect, HTMLAttributes } from 'react';
import { injectSketchFilters } from '@sketchmorphism/core';

export interface SketchCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export const SketchCard: React.FC<SketchCardProps> = ({
  children,
  className = '',
  style = {},
  highlighted = false,
  ...props
}) => {
  useEffect(() => {
    injectSketchFilters();
  }, []);

  return (
    <>
      <style>{`
        .skm-react-card {
          position: relative;
          background-color: #f4efe3;
          border: 2.5px solid #2b2823;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          filter: url(#sketch-wobble);
          padding: 24px;
          box-sizing: border-box;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent 0px,
            transparent 8px,
            rgba(43, 40, 35, 0.04) 8px,
            rgba(43, 40, 35, 0.04) 9px
          );
          box-shadow: 4px 6px 0px rgba(43, 40, 35, 0.12);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .skm-react-card--highlighted {
          background-color: #fbf7ec;
          border-color: #47658c;
          box-shadow: 5px 7px 0px rgba(71, 101, 140, 0.15);
        }
      `}</style>
      <div
        className={`skm-react-card ${highlighted ? 'skm-react-card--highlighted' : ''} ${className}`}
        style={style}
        {...props}
      >
        {children}
      </div>
    </>
  );
};
