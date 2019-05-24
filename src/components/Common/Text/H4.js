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
    font-size: 36px;

    @media (max-width: 992px) {
      font-size: 34px;
    }
  
    @media (max-width: 768px) {
      font-size: 32px;
    }
  
    @media (max-width: 576px) {
      font-size: 28px;
    }
  
  `,
}

// 32px

const H4 = styled.h4`
  font-family: 'TFArrow', Georgia, serif;
  margin: 0;
  font-size: ${theme.text.heading.size.small}; 
  font-weight: 400;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  color: ${theme.colours.white.main};


  @media (max-width: 992px) {
    font-size: 30px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG, 'colour')};
  ${applyStyleModifiers(MODIFIER_CONFIG_LANG, 'lang')};

`;

export default H4;