export const sketchTokens = {
  colors: {
    desk: '#d7cfbc',
    paper: '#f4efe3',
    paperLift: '#fbf7ec',
    ink: '#2b2823',
    inkSoft: '#5d574d',
    graphite: '#5c564d',
    blue: '#47658c',
    blueGhost: 'rgba(71, 101, 140, 0.4)',
    red: '#c2402a',
    redGhost: 'rgba(194, 64, 42, 0.45)',
    redGhostHard: 'rgba(194, 64, 42, 0.55)',
    highlighterYellow: '#fef08a',
    highlighterPink: '#fbcfe8',
  },
  borders: {
    organicRadius: '255px 15px 225px 15px / 15px 225px 15px 255px',
    handdrawnCard: '255px 25px 225px 25px / 25px 225px 25px 255px',
  },
  physics: {
    keycapSink: 'translate(3px, 4px)',
    hoverLift: 'translate(-1px, -1px)',
  }
} as const;

export type SketchTokens = typeof sketchTokens;
