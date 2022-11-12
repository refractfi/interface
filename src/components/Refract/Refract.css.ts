import { style } from '@vanilla-extract/css';

export const refractWrapper = style({
  transition: 'all 0.3s ease',
  left: 0,
  right: 0,
  position: 'absolute',
  selectors: {
    '&.allocations': {
      '@media': {
        'screen and (min-width: 1024px)': {
          left: -950,
          position: 'fixed',
        },
      },
    },
    '&.stats': {
      '@media': {
        'screen and (min-width: 1024px)': {
          left: 950,
        },
      },
    },
    '&.generate': {
      position: 'absolute',
    },
  },
});

export const refract = style({
  transition: 'all 0.3s ease',

  filter: 'saturate(150%) brightness(110%)',
  top: 0,
  selectors: {
    '&.refract&.topSkew': {
      '@media': {
        'screen and (min-width: 1024px)': {
          top: -75,
          transform: 'perspective(350px) rotateX(65deg) scale(0.65)',
        },
      },
    },
    '&.allocations': {
      display: 'none',
      '@media': {
        'screen and (min-width: 1024px)': {
          display: 'block',
          top: 0,
          transform: 'perspective(3000px) rotateY(-88deg) scale(1)',
        },
      },
    },
    '&.stats': {
      display: 'none',
      '@media': {
        'screen and (min-width: 1024px)': {
          display: 'block',
          top: 0,
          transform: 'perspective(3000px) rotateY(88deg) scale(1)',
        },
      },
    },
  },
  width: 900,
  height: 450,
  '@media': {
    'screen and (min-width: 768px)': {
      width: 700,
      height: 350,
    },
    'screen and (min-width: 1024px)': {
      width: 900,
      height: 450,
    },
  },
});
export const scale = style({
  scale: 10,
});

export const svg = style({
  width: 450,
  height: 225,
  transform: 'rotate(90deg) scaleY(165%) scaleX(100%)',
  '@media': {
    'screen and (min-width: 768px)': {
      transform: 'none',
      width: 700,
      height: 350,
    },
    'screen and (min-width: 1024px)': {
      width: 900,
      height: 450,
    },
  },
});
