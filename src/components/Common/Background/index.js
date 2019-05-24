import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';

import exampleBackground from "../../../img/pagoda.jpg";


const MODIFIER_CONFIG_OPTIONS = {
  bleedBottom: () => `
    margin-bottom: -120px;
  `,

  bleedTop: () => `
    margin-top: -100px;
  `,
}

const BackgroundWrapper = styled.div`
  height: 100%;
  position: relative;
  z-index: 1;
  z-index: ${
    props => props.zIndex
  };

  ${applyStyleModifiers(MODIFIER_CONFIG_OPTIONS, 'options')};
`;

const MODIFIER_CONFIG_COVER = {
  topHalf: () => `
    bottom: 50%;
  `,

  bottomHalf: () => `
    top: 50%;
  `,
}

const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  background-size: cover;
  background-position-x: center;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.background})`};
  box-shadow: inset 0 0 150px 190px #202121;
  opacity: 0.5;
  ${props => props.grayscale &&
    `filter: grayscale(100%);`
  }
  ${props => props.darker &&
    `opacity: 0.2;`
  }

  &::after {
    position: absolute;
    display: inline-block;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    box-shadow: inset 0 0 30px 40px #202121;
    background-color: rgb(0,0,0,.3);
  }
  ${applyStyleModifiers(MODIFIER_CONFIG_COVER, 'cover')};

`;


const Background = (props) => {

  return (
    <BackgroundWrapper options={props.options} zIndex={props.zIndex}>
      {props.background &&
        <BackgroundImage 
          cover={props.cover}
          background={props.background}
          grayscale={props.grayscale}
          darker={props.darker}
        />
      }
      {props.children}
    </BackgroundWrapper>
  )
}

Background.defaultProps = {
  grayscale: true,
  bleedBottom: false,
  background: null,
};

export default Background;
