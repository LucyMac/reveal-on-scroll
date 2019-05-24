import React from "react";
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Container, Row, Col } from "react-bootstrap";

import Module from "../Module";
import Background from "../Background";
import Spotlight from "../Spotlight";

import backgroundImg from "../../../img/hotel_detail_hero.png";
import dubai from "../../../img/dubai-iconic.jpg";

const ParallaxStyled = styled.div`
  .section {
    height: 0;
  }

  .parallax-background {
    min-height: ${props => props.height || '800px'};
    position: relative;
    overflow: hidden;

    @media (max-width: 992px) {
      min-height: 1050px;
    }
    
    @media (max-width: 768px) {
      min-height: 1100px;
    }
    
    @media (max-width: 576px) {
      min-height: 1500px;
    }

    &::after {
      position: absolute;
      display: inline-block;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 150%;
      height: 100%;
      z-index: 1;
      // box-shadow: inset 0 0 30px 40px #202121;
      background-color: rgb(0,0,0,.3);
    }

    .image-wrapper {
      position: absolute;
      width: 100%;
      height: 115%;
      // top: 100px;

      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
  
      background-size: cover;
      background-position-x: center;
      background-repeat: no-repeat;
      background-image: ${props => `url(${props.background})`};

      // box-shadow: inset 0 0 150px 190px #202121;

      .shadow {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
  
        &::before {
          position: absolute;
          display: inline-block;
          content: "";
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width:${props => props.extraWide ? '150%' : '110%'};
          height: 100%;
          z-index: 1;
          // box-shadow: ${props => props.bigShadow ? 'inset 0 0 170px 200px #202121' : 'inset 0 0 100px 90px #202121'};
          // border-radius: ${props => props.circular ? '50%' : '0'};
        }
  
        &::after {  // experiment cut out
          position: absolute;
          display: inline-block;
          content: "";
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width:${props => props.extraWide ? '150%' : '110%'};
          height: 100%;
          z-index: 1;
          box-shadow: -1px -2px 0px 300px #202121;
          border-radius: ${props => props.circular ? '50%' : '0'};
        }
      }
    }

    .parallax-background-image {
      position: relative;
      width: 100%;
      box-shadow: inset 0 0 150px 190px #202121;
      opacity: 0.5;
      object-fit: cover;
      ${props => props.grayscale &&
        `filter: grayscale(100%);`
      }

      &::before {
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
        // box-shadow: inset 0 0 150px 190px #202121;
        opacity: 0.5;
      }
    }
  }
`;

const ParallaxBackground = (props) => (
  <ParallaxStyled grayscale={props.grayscale} circular={props.circular} extraWide={props.extraWide} background={props.background}>
    <Controller>
      <div className="section" />
      <Scene
        indicators={false}
        duration="100%"
        triggerHook="onEnter">
        <Timeline height={props.height}
          wrapper={<div className="parallax-background" style={{minHeight: props.height}} />}>
          <Tween
            position="0"
            from={{
              yPercent: -40,
            }}
            to={{
                yPercent: 0,
            }}>
            <div className="image-wrapper">
              {/* <Background background={props.background} grayscale={false} /> */}
            </div>
            {props.children}
          </Tween>
        </Timeline>
      </Scene>
      <div className="section" />
    </Controller>
  </ParallaxStyled>
);

ParallaxBackground.defaultProps = {
  height: '800px',
  circular: false,
  bigShadow: false,
  grayscale: false,
}

export default ParallaxBackground;
