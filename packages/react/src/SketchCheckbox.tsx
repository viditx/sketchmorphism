import React, { useEffect, InputHTMLAttributes } from 'react';
import { injectSketchFilters } from '@sketchmorphism/core';

export interface SketchCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  className?: string;
}

export const SketchCheckbox: React.FC<SketchCheckboxProps> = ({
  label,
  className = '',
  style = {},
  checked,
  onChange,
  ...props
}) => {
  useEffect(() => {
    injectSketchFilters();
  }, []);

  return (
    <>
      <style>{`
        .skm-react-check {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          font: 500 15px/1.4 system-ui, sans-serif;
          color: #2b2823;
          user-select: none;
        }
        .skm-react-check__input {
          position: absolute;
          opacity: 0;
          width: 1px;
          height: 1px;
        }
        .skm-react-check__art {
          width: 28px;
          height: 28px;
          flex: none;
          overflow: visible;
        }
        .skm-react-check__tick {
          stroke-dasharray: 1;
          transition: stroke-dashoffset 0.4s cubic-bezier(0.27, 1.36, 0.39, 1);
        }
        .skm-react-check__input:not(:checked) ~ .skm-react-check__art .skm-react-check__tick {
          stroke-dashoffset: 1;
        }
        .skm-react-check__input:checked ~ .skm-react-check__art .skm-react-check__tick {
          stroke-dashoffset: 0;
        }
      `}</style>
      <label className={`skm-react-check ${className}`} style={style}>
        <input
          type="checkbox"
          className="skm-react-check__input"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <svg className="skm-react-check__art" viewBox="0 0 32 32" aria-hidden="true">
          {/* Box frame */}
          <rect
            x="3"
            y="3"
            width="26"
            height="26"
            rx="4"
            fill="#fbf7ec"
            stroke="#2b2823"
            strokeWidth="2.4"
            filter="url(#sketch-wobble)"
          />
          {/* Hand-drawn checkmark */}
          <path
            className="skm-react-check__tick"
            d="M 8 16 L 14 22 L 24 9"
            fill="none"
            stroke="#c2402a"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength="1"
            filter="url(#sketch-wobble)"
          />
        </svg>
        {label && <span>{label}</span>}
      </label>
    </>
  );
};
