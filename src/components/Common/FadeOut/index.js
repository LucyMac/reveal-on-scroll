import React from "react";
import styled from 'styled-components';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { Container, Row, Col } from "react-bootstrap";

import Module from "../Module";
import Background from "../Background";
import Hero from "../../Hotel/Hero";

import backgroundImg from "../../../img/hotel_detail_hero.png";
import dubai from "../../../img/dubai-iconic.jpg";

const FadeStyled = styled.div`
  .section {
    height: 0;
  }

  .fade__wrapper { // starting point
    transition: opacity 0.5s ease-out;
    position: relative;
    // min-height: 950px;
    height: 100%;
    
  }
  
  .fade__content {
    // position: absolute;
    position: relative;
    width: 100%;
    height: 100%;
    opacity: 1;
  }

`;

const FadeOut = (props) => (
  <FadeStyled>
    <div className="section" />
    <div id={`fade-trigger--${props.identifier}`}></div>
    <Controller>
      <Scene
        indicators={false}
        triggerElement={`#fade-trigger--${props.identifier}`}
        duration="35%"
        triggerHook="onLeave"
        offset={props.offset ? props.offset : "150px"} // green start
        reverse
      >
        <Timeline
          wrapper={<div className="fade__wrapper" />}
        >
          <Tween
            to={{
              css: {
                opacity: 0
              },
            }}
            ease="Strong.easeOut"
          >
            <div className="fade__content">
              {props.children}
            </div>
          </Tween>
        </Timeline>

      </Scene>
    </Controller>
    <div className="section" />
  </FadeStyled>
);

export default FadeOut;
