import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import "./style.scss";
import { useMediaQuery } from "react-responsive";

const HeroBx = styled.div`
  background: url(images/bg.png);
  min-height: 85vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: bottom;
  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0) url("images/vector.png") no-repeat scroll center bottom;
    mix-blend-mode: overlay;
    z-index: -1;
  }

  .pianoimg {
    position: absolute;
    bottom: -58px;
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1000px;
  }

  @media screen and (max-width: 1400px) {
    min-height: 93vh;
  }

  @media screen and (max-width: 1300px) {
    .pianoimg{
        width:65vw;
    }
  }
  @media screen and (max-width: 900px) {
    .pianoimg{
        width:85vw;
    }
  }
  @media screen and (max-width: 800px) {
    .pianoimg{
        width:85vw;
    }
  }
  @media screen and (max-width: 600px) {
    .pianoimg{
        bottom: -30px;
    }
  }
`;

const Content = styled.div`
  width: 252px;
  margin: auto;
  text-align: center;
  color: rgba(9, 58, 52, 0.6);
  font-weight: 300;
  position: relative;
  top: 50vh;
  transform: translateY(-25vh);
  img {
    width: 60px;
    margin-bottom: 14px;
  }
  h3 {
    font-weight: 700;
    font-sizze: 20px;
    color: #093a34;
  }
  .box {
    //background: linear-gradient(180deg, rgba(33, 165, 152, 0.56) 0%, rgba(33, 165, 152, 0.66) 100%);
    background: url(images/shapes/hero.svg);
    background-size: cover;
    background-position: bottom center;
    mix-blend-mode: normal;
    //box-shadow: 0px 12px 34px rgba(44, 146, 135, 0.38);
    box-shadow: 0 20px 20px 0px rgba(44, 146, 135, 0.38);
    padding: 24px;
    border-radius: 14px;
    color: #befff8;
    font-size: 16px;
    margin-top: 20px;
    position: relative;
    // &:before {
    //     position: absolute;
    //     content: "";
    //     top: 20px;
    //     left: 0;
    //     width: 100%;
    //     height: 100%;
    //     box-shadow:0px 12px 34px rgba(44, 146, 135, 0.38);

    //   }
    h1 {
      font-size: 40px;
      font-weight: 700;
      color: #fff;
      margin-bottom: 6px;
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 1400px) {
    top: 0;
    transform: translateY(0);
    margin-top: 16vh;
  }
 
`;

const Hero = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <section>
      <HeroBx>
        <Navbar />

        <Content>
          <img src="images/marta.png" alt="Logo" />
          <h3>Marta</h3>
          is Plundering the B&C Chest
          <div className="box">
            <h1>7.777</h1>
            <div>~ $ 2453.1366</div>
          </div>
        </Content>
        <img src={isMobile?"images/pianomb.png":"images/piano.png"} alt="Piano" className="pianoimg" />
      </HeroBx>
    </section>
  );
};

export default Hero;
