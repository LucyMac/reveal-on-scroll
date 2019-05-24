import styled from 'styled-components';

import theme from '../../../styles/theme';

import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG_SIZE = {
  xs: () => `
    font-size: 14px;

    @media (max-width: 992px) {
      font-size: 14px;
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 576px) {
      font-size: 12px;
    }
  `,

  // sm: () => `
  //   font-size: 16px;
  // `,

  md: () => `
    font-size: 18px;

    @media (max-width: 992px) {
      font-size: 18px;
    }

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 576px) {
      font-size: 16px;
    }
  `,

  lg: () => `
    font-size: 24px;

    @media (max-width: 992px) {
      font-size: 22px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 576px) {
      font-size: 18px;
    }
  `,

  // xl: () => `
  //   font-size: 30px;
  // `,
}

const MODIFIER_CONFIG_BULLET = {
  diamond: () => `
    ::before {
      display: inline-block;
      content: '';
      width: 10px;
      height: 10px;
      transform: rotate(-315deg);
      border: solid 1px ${theme.colours.gold.main};
      margin-right: 15px;
    }
  `,
  diamondRtl: () => `
    ::after {
      display: inline-block;
      content: '';
      width: 10px;
      height: 10px;
      transform: rotate(-315deg);
      border: solid 1px ${theme.colours.gold.main};
      margin-left: 15px;
    }
  `,

}

const MODIFIER_CONFIG_WEIGHT= {
  light: () => `
    font-weight: 500;
  `,
}


const MODIFIER_CONFIG_LANG = {
  arabic: () => `
    font-family: 'Cairo', Helvetica, Arial, sans-serif;
    font-size: 19px;

    @media (max-width: 576px) {
      font-size: 17px;
    }
  
  `,
}

const Text = styled.p`
  font-family: 'Gilroy', sans-serif;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;

  ${applyStyleModifiers(MODIFIER_CONFIG_SIZE, 'size')};
  ${applyStyleModifiers(MODIFIER_CONFIG_BULLET, 'bullet')};
  ${applyStyleModifiers(MODIFIER_CONFIG_WEIGHT, 'weight')};
  ${applyStyleModifiers(MODIFIER_CONFIG_LANG, 'lang')};

`;

export default Text;