import { rgba } from 'polished';

export default {
  colors: {
    white: '#fff',
    black: '#333',

    default: {
      light: '#ebf3f7',
      bg: '#e0ecf1',
      hover: '#bfd5de'
    },

    primary: {
      light: '#4e4e4e',
      bg: '#2d2d2d',
      hover: '#000'
    },

    secondary: {
      light: '#00a6fe',
      bg: '#0077bd',
      hover: '#005a9a'
    }
  },

  fonts: {
    url: 'https://fonts.googleapis.com/css?family=Poppins&display=swap',
    family: '"Poppins", sans-serif'
  },

  radii: [0, 3, 30, '50%'],

  shadows: {
    base: `${rgba('#000', 0.2)} 0 2px 6px 0`,
    default: {
      focus: `${rgba('#ebf3f7', 0.4)} 0 1px 9px 2px`,
      focusHover: `${rgba('#ebf3f7', 0.2)} 0 8px 18px 0`
    },
    primary: {
      focus: `${rgba('#4e4e4e', 0.4)} 0 1px 9px 2px`,
      focusHover: `${rgba('#4e4e4e', 0.2)} 0 8px 18px 0`
    },
    secondary: {
      focus: `${rgba('#00a6fe', 0.4)} 0 1px 9px 2px`,
      focusHover: `${rgba('#00a6fe', 0.2)} 0 8px 18px 0`
    }
  }

  // Components
  // Uncomment for custom Button[variant]
  // buttons: {
  //   default: {
  //     color: 'black',
  //     bg: 'lightBlue2',
  //     '&:hover': {
  //       bg: 'lightBlue3'
  //     }
  //   },
  //   primary: {
  //     color: 'white',
  //     bg: 'black2',
  //     '&:hover': {
  //       bg: 'black3'
  //     }
  //   },
  //   secondary: {
  //     color: 'white',
  //     bg: 'blue2',
  //     '&:hover': {
  //       bg: 'blue3'
  //     }
  //   }
  // }
};
