import React from 'react';

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button style={{
      padding: '10px 20px',
      border: '2px solid black',
      borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
      background: 'transparent',
      fontFamily: 'inherit',
      fontSize: '1rem',
      cursor: 'pointer'
    }}>
      {children}
    </button>
  );
}
