import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";

const Header = () => {
  return (
    <section className="container" style={{ zIndex: 30, position: "relative" }}>
      <Tabs>
        <div className="tab_left">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#tabl1">
                <div className="bullet"></div>Keys
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#tabl2">
                <div className="bullet"></div>Profile & Refferals
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#tabl3">
                <div className="bullet"></div>Anti-Whole
              </a>
            </li>
          </ul>
        </div>
        <div className="tab_right">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="pill" href="#tabr1">
                <div className="bullet"></div>This Round
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#tabr2">
                <div className="bullet"></div>Purchases{" "}
                <span className="count">420</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="pill" href="#tabr3">
                <div className="bullet"></div>Last Round
              </a>
            </li>
          </ul>
        </div>
      </Tabs>
      <Box>
        <Left />
        <div className="center"></div>
        <Right />
      </Box>
    </section>
  );
};

const Box = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  //   background:url(images/shapes/header.png);
  //   background-repeat:no-repeat;
  .center {
    position: absolute;
    width: 0px;
    background: transparent;
    height: 100%;
    top: 0;
    left: 50%;

    transform: translateX(-50%);
    border-right: 1px dashed #b0f3eb;
    border-left: 1px dashed #b0f3eb;
    &:after {
      position: absolute;
      content: "";
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;

      width: 20px;
      height: 20px;
      background: #a3ede5;
    }
    &:before {
      position: absolute;
      content: "";
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      border-radius: 50%;

      width: 20px;
      height: 20px;
      background: #bffaf3;
    }
  }
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #08776c 0%,
      rgba(8, 119, 108, 0.76) 99.55%
    );
    mix-blend-mode: normal;
    opacity: 0.9;
    z-index: -1;
  }
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #08776c 0%,
      rgba(8, 119, 108, 0.76) 99.55%
    );
    mix-blend-mode: normal;
    opacity: 0.5;
    filter: blur(60px);
    z-index: -2;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .center {
      border-top: 1px dashed #b0f3eb;
      border-bottom: 1px dashed #b0f3eb;
      border-right: 0;
      border-left: 0;
      left: 0;
      top: 50%;
      width: 100%;
      height: 0px;
      transform: translate(0, -50%);
      &:before {
        top: 50% !important;
        left: 0 !important;
        transform: translate(-50%, -50%) !important;
        background: #92e5db;
      }
      &:after {
        top: 50% !important;
        right: 0 !important;
        left: unset !important;
        transform: translate(50%, -50%) !important;
        background: #92e5db;
      }
    }
  }
`;

const Tabs = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  // background:red;
  margin-bottom: -1px;

  align-items: center;
  .tab_right,
  .tab_left {
    height: 58px;
  }
  &:before,
  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        180deg,
        rgba(157, 234, 225, 0.3) 2.08%,
        rgba(157, 234, 225, 0.76) 29.94%,
        rgba(157, 234, 225, 0.03) 75.71%
      ),
      linear-gradient(
        180deg,
        rgba(157, 234, 225, 0.3) 2.08%,
        rgba(157, 234, 225, 0.76) 18.06%,
        #9deae1 32.6%,
        #9deae1 66.1%,
        rgba(157, 234, 225, 0.03) 100%
      );
    opacity: 0.7;
    backdrop-filter: blur(6px);
    background-repeat: no-repeat;
    background-size: 100% 500%;
    z-index: -2;
  }

  .nav {
    border-radius: 0;
    align-items: center;
    height: 100%;
    .nav-item:nth-child(2) {
      border-right: 1.5px solid rgba(0, 129, 112, 0.2);
      border-left: 1.5px solid rgba(0, 129, 112, 0.2);
    }
    .nav-item {
      height: 100%;
      position: relative;
    }
    .nav-link {
      color: #093a34;
      background: transparent;
      font-size: 16px;
      font-weight: normal;
      display: flex;
      height: 100%;
      align-items: center;
      padding: 16px 28px;
      position: relative;
      &.active {
        text-shadow: 0px 0px 1px #093a34;
        &:before {
          position: absolute;
          content: "";
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            80.29% 112.84% at 73.51% 114.86%,
            #ffffff 0%,
            rgba(255, 255, 255, 0) 100%
          );
          opacity: 0.7;
        }
        .bullet {
          display: block !important;
        }
      }

      .bullet {
        display: none;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: linear-gradient(
          180deg,
          rgba(208, 244, 239, 0) 31.67%,
          #d2f4f0 45.51%
        );
        z-index: 40;
        &:after {
          position: absolute;
          content: "";
          bottom: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: radial-gradient(
            95.45% 95.45% at 50% 4.55%,
            #21675e 0%,
            #075147 100%
          );
          box-shadow: 0px 4px 4px rgba(33, 103, 94, 0.4);
          z-index: 40;
        }
      }

      .count {
        border-radius: 80px;
        background: rgba(255, 255, 255, 0.3);
        padding: 4px 10px;
        font-size: 12px;
        font-weight: 700;
        margin-left: 6px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .nav {
      .nav-link {
        font-size: 14px;
        padding: 16px 20px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    height: auto;
  }
  @media screen and (max-width: 500px) {
    .nav {
      .nav-link {
        font-size: 13px;
        padding: 16px 16px;
      }
    }
  }
`;

export default Header;
