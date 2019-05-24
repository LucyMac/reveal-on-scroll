import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG_LANG = {
  arabic: () => `
    font-family: 'Markazi Text', Georgia, serif;
    font-size: 50px;

    @media (max-width: 992px) {
      font-size: 45px;
    }
  
    @media (max-width: 768px) {
      font-size: 38px;
    }
  
    @media (max-width: 576px) {
      font-size: 35px;
    }
  `,
}

const H2 = styled.h2`
  font-family: 'TFArrow', Georgia, serif;
  margin: 0;
  font-size: 45px;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 992px) {
    font-size: 40px;
  }

  @media (max-width: 768px) {
    font-size: 34px;
  }

  @media (max-width: 576px) {
    font-size: 30px;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG_LANG, 'lang')};
`;

export default H2;