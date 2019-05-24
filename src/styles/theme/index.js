
// import { headerFont, bodyFont } from './font';
// import { heading, body } from './fontSizes';
// import colours from './colours';
// import spacing from './spacing';
// import buttons from './buttons';
// import './icons';

/*-----------------------------------------------*\
 * Font family
 *------------------------------------------------*/

const headerFont = 'TFArrow';
const bodyFont = 'Gilroy';

/*-----------------------------------------------*\
 * Font sizes
 *------------------------------------------------*/

const headingSize = {
  xSmall: '22px', // h5
  small: '32px', // h4
  medium: '36px', // h3
  large: '48px', // h2
  xLarge: '100px' // h1
}

/**
 * Body Text Variant Sizes
 */
const bodySize = {
  small: '12px',
  medium: '14px',
  large: '16px'
}

/*-----------------------------------------------*\
 * Colours
 *------------------------------------------------*/

const colours = {

  gold: {
    main: '#8C816B',
    light: '#F0ECE3'
  },

  grey: {
    main: '#8F8F8F',
  },

  red: {
    main: '#BB8877',
    dark: '#793E2B',
    light: '#E4CFC9',
    hint: '#F1E7E4',
  },

  blue: {
    main: '#5795B3',
    dark:  '#417086',
    light: '#BCD5E1',
    hint: '#E4EEF3',
  },

  black: {
    main: '#202121',
  },

  white: {
    main: '#FFF',
  },
}

/*-----------------------------------------------*\
 * Spacing
 *------------------------------------------------*/

const baseValue = 4;

// aim to reduce this list if not all used
const multiples = [ 
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12, 24, 16, 36
];

const spacing = multiples.map(multiple => {
  return multiple * baseValue + 'px';
})


/*-----------------------------------------------*\
 * Icons
 *------------------------------------------------*/

const icons = {

  src: {

    small: {
  
      add:
        `<svg height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m5 0v10m5-5h-10" fill="none" stroke="#232831" stroke-linecap="square" transform="translate(1 1)"/></svg>`,
    },

    medium: { 

    },

    large: { 

    }
  }
};

/*-----------------------------------------------*\
 * Brand Theme
 *-----------------------------------------------*\
 *
 * Imports all config variants for
 * theme type items throughout the styleguide.
 * 
 *------------------------------------------------*/

const theme = {

  /**
   * Text/Typography Themes
   */
  text: {
    heading: {
      size: headingSize,
      semiBold: 500,
      bold: 600,
      height: 1.333
    },

    body: {
      size: bodySize,
      semiBold: 500,
      bold: 600,
      height: 1.5
    },

    fontFamily: {
      header: headerFont,
      body: bodyFont,
    }
  },

  /**
   * Theme Brand colours
   */
  colours,
  
  /**
   * Spacing (for padding, margins and heights)
   */
  spacing,

  /**
   * Icons
   */
  icons,

  /**
   * Grid config
   */
  grid: {
    default: '100%'
  },

  /**
   * Transitions
   */
  transition: {
    base: 'all 0.2s ease'
  },

  /**
   * Box shadow
   */
  boxShadow: {
    grey: `0px 0px 1px 4px ${colours.grey.main}`,
    black: `0 8px 12px 0 ${colours.black.main};`
  },
}


// const JSONTheme = JSON.stringify(theme);

module.exports = theme;