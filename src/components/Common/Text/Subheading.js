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
    font-family: 'Cairo', Helvetica, Arial, sans-serif;
    font-size: 18px;

    @media (max-width: 576px) {
      font-size: 16px;
    }
  `,
}

const Subheading = styled.h5`
  font-family: 'Gilroy', sans-serif;
  margin: 0;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG, 'colour')};
  ${applyStyleModifiers(MODIFIER_CONFIG_LANG, 'lang')};

`;

export default Subheading;