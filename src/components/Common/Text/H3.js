import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG_LANG = {
  arabic: () => `
    font-family: 'Markazi Text', Georgia, serif;
    font-size: 36px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  
    @media (max-width: 576px) {
      font-size: 28px;
    }
  `,
}
const MODIFIER_CONFIG_COLOUR = {
  white: () => `
    color: #fff;
  `,
}

const H3 = styled.h3`
  font-family: 'TFArrow', Georgia, serif;
  margin: 0;
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  color: #8F8F8F; // $grey

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG_LANG, 'lang')};
  ${applyStyleModifiers(MODIFIER_CONFIG_COLOUR, 'colour')};
`;

export default H3;