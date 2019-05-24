import styled from 'styled-components';

import theme from '../../../styles/theme';

import { applyStyleModifiers } from 'styled-components-modifiers';


const MODIFIER_CONFIG_LANG = {
  arabic: () => `
    font-family: 'Cairo', Helvetica, Arial, sans-serif;
    font-size: 18px;

    @media (max-width: 576px) {
      font-size: 16px;
    }
  `,
}

const MoreLink = styled.h5`
  font-family: 'Gilroy', sans-serif;
  margin: 0;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  color: ${theme.colours.gold.main};
  cursor: pointer;
  
  &:hover {
    color: ${theme.colours.gold.light};
  }

  ::after {
    font-family: 'Gilroy', sans-serif;
    display: inline-block;
    content: '>';
    width: 8px;
    height: 11px;
    margin-left: 10px;
  }

  @media (max-width: 992px) {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG_LANG, 'lang')};

`;

export default MoreLink;