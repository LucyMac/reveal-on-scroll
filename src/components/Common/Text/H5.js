import styled from 'styled-components';

import theme from '../../../styles/theme';

import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG = {
  gold: () => `
    color: ${theme.colours.gold.main};
  `,
  grey: () => `
    color: ${theme.colours.grey.main};
  `,
}

const MODIFIER_CONFIG_LANG = {
  arabic: () => `
    font-family: 'Markazi Text', Georgia, serif;
    font-size: 26px;

    @media (max-width: 576px) {
      font-size: 22px;
    }
  `,
}

// 32px

const H5 = styled.h5`
  font-family: 'TFArrow', Georgia, serif;
  margin: 0;
  font-size: ${theme.text.heading.size.xSmall}; 
  letter-spacing: .5px;
  font-weight: 400;
  line-height: 1.4;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  color: ${theme.colours.white.main};

  @media (max-width: 576px) {
    font-size: 18px;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG, 'colour')};
  ${applyStyleModifiers(MODIFIER_CONFIG_LANG, 'lang')};

`;

export default H5;