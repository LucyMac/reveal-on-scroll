import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

const MODIFIER_CONFIG_MARGIN = {
  none: () => `
    padding-bottom: 0;
    padding-top: 0;
  `,
  top: () => `
    padding-top: 190px;

    @media (max-width: 768px) {
      padding-top: 110px;
    }

    @media (max-width: 576px) {
      padding-top: 80px;
    }
  `,
  extraTop: () => `
    padding-top: 350px;

    @media (max-width: 768px) {
      padding-top: 310px;
    }

    @media (max-width: 576px) {
      padding-top: 250px;
    }
  `,
  bottom: () => `
    padding-bottom: 190px;

    @media (max-width: 768px) {
      padding-bottom: 110px;
    }

    @media (max-width: 576px) {
      padding-bottom: 80px;
    }
  `,
  extraBottom: () => `
    padding-bottom: 350px;

    @media (max-width: 768px) {
      padding-bottom: 310px;
    }

    @media (max-width: 576px) {
      padding-bottom: 250px;
    }
  `,
}

// const MODIFIER_CONFIG_BACKGROUND = {
//   withBackground: () => `
//     ${props => props.backgroundImage && 
//       `background-image: url(props.backgroundImage)`
//     };
//   `,
// }


const Module = styled.div`
  height: auto;
  width: 100%;

  // padding-bottom: 150px;

  // @media (max-width: 768px) {
  //   padding-bottom: 96px;
  // }

  // @media (max-width: 576px) {
  //   padding-bottom: 64px;
  // }

  ${applyStyleModifiers(MODIFIER_CONFIG_MARGIN, 'spacing')};

`;

export default Module;
