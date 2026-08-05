export const generateWobbleFilter = (id: string, baseFrequency: number = 0.04, numOctaves: number = 3, scale: number = 3): string => {
  return `<filter id="${id}">
    <feTurbulence type="fractalNoise" baseFrequency="${baseFrequency}" numOctaves="${numOctaves}" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="${scale}" xChannelSelector="R" yChannelSelector="G" />
  </filter>`;
};

export const generateSquigglyFilter = (id: string): string => {
  return `<filter id="${id}">
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
  </filter>`;
};

