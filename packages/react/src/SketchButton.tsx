import React, { useEffect, ButtonHTMLAttributes } from 'react';
import { injectSketchFilters } from '@sketchmorphism/core';

export interface SketchButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'blueprint';
  children: React.ReactNode;
  className?: string;
}

export const SketchButton: React.FC<SketchButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  style = {},
  onClick,
  ...props
}) => {
  useEffect(() => {
    injectSketchFilters();
  }, []);

  const isRed = variant === 'primary';
  const isBlue = variant === 'blueprint';
  const strokeColor = isBlue ? '#47658c' : isRed ? '#c2402a' : '#2b2823';
  const hatchId = isRed ? '#skm-btn-hatch-red' : '#skm-btn-hatch-ink';

  return (
    <>
      <style>{`
        .skm-react-btn {
          position: relative;
          min-width: 120px;
          height: 42px;
          padding: 0 20px;
          border: 0;
          isolation: isolate;
          cursor: pointer;
          background: #fbf7ec;
          border-radius: 12px;
          font: 600 15px/1 system-ui, -apple-system, sans-serif;
          color: ${strokeColor};
          display: inline-flex;
          align-items: center;
          justify-content: center;
          user-select: none;
          transition: transform 0.15s cubic-bezier(0.27, 1.36, 0.39, 1);
        }
        .skm-react-btn__art {
          position: absolute;
          inset: -8px;
          width: calc(100% + 16px);
          height: calc(100% + 16px);
          overflow: visible;
          pointer-events: none;
        }
        .skm-react-btn__label {
          position: relative;
          display: inline-block;
          transition: transform 0.25s cubic-bezier(0.27, 1.36, 0.39, 1);
        }
        @media (hover: hover) {
          .skm-react-btn:hover .skm-react-btn__label {
            transform: translate(-1px, -1px);
          }
        }
        .skm-react-btn:active .skm-react-btn__label {
          transform: translate(3px, 4px);
        }
        .skm-react-btn:focus-visible {
          outline: 2px dashed #47658c;
          outline-offset: 4px;
        }
      `}</style>
      <button
        type="button"
        className={`skm-react-btn ${className}`}
        style={style}
        onClick={onClick}
        {...props}
      >
        <svg className="skm-react-btn__art" viewBox="-8 -8 136 56" preserveAspectRatio="none" aria-hidden="true">
          {/* 45-degree architectural hatch depth */}
          <path
            d="M 13.6 1.1 Q 30 .2 46.5 1.3 Q 63 .5 79.5 1.2 Q 94 .3 107.8 1 Q 119.3 .4 119 12.4 Q 118.3 20 119.1 27.9 Q 118.6 39.5 106.9 39 Q 90 38.3 73.4 39.2 Q 56 38.5 39.5 39.1 Q 26 39.7 13.2 38.9 Q .7 39.4 1.2 27.6 Q .5 19 1 11.4 Q 1.3 .6 13.6 1.1 Z"
            fill={`url(${hatchId})`}
            filter="url(#skm-btn-w2)"
            transform="translate(5 6) rotate(.6 60 20)"
          />
          {/* Pass 02: retraced architectural line */}
          <path
            d="M 10.8 -2.4 Q 34 -3.4 60 -2.6 Q 86 -3.5 110.6 -2.5 Q 122.8 -3.1 122.4 9.6 Q 123.1 20 122.5 30.8 Q 122.9 42.7 110.4 42.4 Q 82 43.2 56 42.5 Q 30 43.1 10.2 42.3 Q -2.6 42.9 -2.2 30.2 Q -2.9 18 -2.4 8.4 Q -2.8 -2.9 10.8 -2.4 Z"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.8"
            opacity="0.45"
            filter="url(#skm-btn-w2)"
            transform="rotate(.7 60 20)"
          />
          {/* Pass 01: primary contour */}
          <path
            d="M 13.6 1.1 Q 30 .2 46.5 1.3 Q 63 .5 79.5 1.2 Q 94 .3 107.8 1 Q 119.3 .4 119 12.4 Q 118.3 20 119.1 27.9 Q 118.6 39.5 106.9 39 Q 90 38.3 73.4 39.2 Q 56 38.5 39.5 39.1 Q 26 39.7 13.2 38.9 Q .7 39.4 1.2 27.6 Q .5 19 1 11.4 Q 1.3 .6 13.6 1.1 Z"
            fill="none"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#skm-btn-w1)"
          />
        </svg>
        <span className="skm-react-btn__label">{children}</span>
      </button>
    </>
  );
};
