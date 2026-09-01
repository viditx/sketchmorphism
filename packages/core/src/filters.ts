const INJECTED_ID = 'sketchmorphism-filters';

export const injectSketchFilters = () => {
  if (typeof document === 'undefined') return;
  if (document.getElementById(INJECTED_ID)) return;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = INJECTED_ID;
  svg.style.position = 'absolute';
  svg.style.width = '0';
  svg.style.height = '0';
  svg.style.pointerEvents = 'none';
  svg.setAttribute('aria-hidden', 'true');

  svg.innerHTML = `
    <defs>
      <!-- Base organic stroke wobble -->
      <filter id="sketch-wobble" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="3" xChannelSelector="R" yChannelSelector="G" />
      </filter>

      <!-- Soft tactile squiggly border -->
      <filter id="sketch-squiggly" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
      </filter>

      <!-- Active hover micro-tremor -->
      <filter id="sketch-squiggly-hover" x="-25%" y="-25%" width="150%" height="150%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G" />
      </filter>

      <!-- Button stroke primary frame (law 01) -->
      <filter id="skm-btn-w1" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.022 0.035" numOctaves="3" seed="7" result="n"/>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="3.2"/>
      </filter>

      <!-- Button hatch lift depth filter (law 02) -->
      <filter id="skm-btn-w2" x="-25%" y="-25%" width="150%" height="150%">
        <feTurbulence type="fractalNoise" baseFrequency="0.03 0.045" numOctaves="3" seed="11" result="n"/>
        <feDisplacementMap in="SourceGraphic" in2="n" scale="5.5"/>
      </filter>

      <!-- 47-degree red cross-hatch pattern -->
      <pattern id="skm-btn-hatch-red" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(47)">
        <line x1="0" y1="0" x2="0" y2="7" stroke="rgba(194,64,42,0.45)" stroke-width="1.3"/>
      </pattern>

      <!-- 47-degree charcoal ink cross-hatch pattern -->
      <pattern id="skm-btn-hatch-ink" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(47)">
        <line x1="0" y1="0" x2="0" y2="7" stroke="rgba(43,40,35,0.25)" stroke-width="1.3"/>
      </pattern>
    </defs>
  `;

  document.body.appendChild(svg);
};
