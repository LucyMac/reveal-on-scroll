import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG_LANG = {
  arabic: () => `
    font-family: 'Markazi Text', Georgia, serif;
    font-size: 110px;

    @media (max-width: 992px) {
      font-size: 80px;
    }
  
    @media (max-width: 768px) {
      font-size: 80px;
    }
  
    @media (max-width: 576px) {
      font-size: 60px;
    }
  `,
}

const MODIFIER_CONFIG_OPTIONS = {
  smaller: () => `
    font-size: 80px;

    @media (max-width: 992px) {
      font-size: 75px;
    }
  
    @media (max-width: 768px) {
      font-size: 60px;
    }
  
    @media (max-width: 576px) {
      font-size: 40px;
    }
  `,
}

const H1 = styled.h1`
  font-family: 'TFArrow', Georgia, serif;
  margin: 0;
  font-size: 100px;
  font-weight: 400;
  line-height: 1;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 992px) {
    font-size: 70px;
  }

  @media (max-width: 768px) {
    font-size: 70px;
  }

  @media (max-width: 576px) {
    font-size: 50px;
  }

  ${applyStyleModifiers(MODIFIER_CONFIG_LANG, 'lang')};
  ${applyStyleModifiers(MODIFIER_CONFIG_OPTIONS, 'options')};

`;

export default H1;