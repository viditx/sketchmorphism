import React, { useEffect, InputHTMLAttributes } from 'react';
import { injectSketchFilters } from '@sketchmorphism/core';

export interface SketchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const SketchInput: React.FC<SketchInputProps> = ({
  label,
  className = '',
  style = {},
  ...props
}) => {
  useEffect(() => {
    injectSketchFilters();
  }, []);

  return (
    <>
      <style>{`
        .skm-react-field {
          width: 100%;
          max-width: 320px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .skm-react-field__label {
          font: 600 13px/1.4 system-ui, sans-serif;
          color: #5d574d;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .skm-react-field__wrap {
          position: relative;
        }
        .skm-react-field__input {
          width: 100%;
          background: #fbf7ec;
          border: 2px solid #5d574d;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          filter: url(#sketch-squiggly);
          padding: 12px 16px;
          font: 400 16px/1.4 system-ui, sans-serif;
          color: #2b2823;
          caret-color: #c2402a;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.2s ease, filter 0.2s ease;
        }
        .skm-react-field__input:focus {
          border-color: #47658c;
          filter: url(#sketch-wobble);
        }
      `}</style>
      <div className="skm-react-field">
        {label && <label className="skm-react-field__label">{label}</label>}
        <div className="skm-react-field__wrap">
          <input
            className={`skm-react-field__input ${className}`}
            style={style}
            {...props}
          />
        </div>
      </div>
    </>
  );
};
