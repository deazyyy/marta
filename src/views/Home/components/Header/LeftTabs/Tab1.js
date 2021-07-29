import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const LeftTab1 = () => {
  return (
    <>
      <div className="header">
        <div>
          <h3>-$0.4752342</h3>
          <div className="price c-g">
            0.0001500 <img src="images/icons/bnb2.svg" alt="bnb" /> Per key
          </div>
        </div>
        <Controls>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
            <p class="off">Whole</p>
            <p class="on">Anti-whole</p>
          </label>
          <div className="soundOuter">
            <img src="images/icons/sound.png" alt="key" />
            <img src="images/icons/info.svg" alt="key" />
          </div>
        </Controls>
      </div>
      <Keys>
        <h3>Your Keys</h3>
        <div>
          <span className="mr-4">
            <img
              src="images/icons/key2.svg"
              alt="key"
              style={{ height: "12px", margin: "-3px 5px 0 0px" }}
            />
            0.00
          </span>
          <span>
            <img
              src="images/icons/bnb2.png"
              alt="key"
              style={{ height: "16px", margin: "-3px 5px 0 0px" }}
            />
            0.0001500
          </span>
        </div>
      </Keys>
      <Input>
        <img src="images/icons/key.png" alt="key" className="key" />
        <input />
        <ul class="nav nav-pills ml-auto" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="pill" href="#">
              +1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#">
              +5
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#">
              +10
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#">
              +50
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="pill" href="#">
              +100
            </a>
          </li>
        </ul>
      </Input>
      <Flex>
        <span>Minimum</span>
        <div>
          <img
            src="images/icons/key2.svg"
            alt="key"
            style={{ height: "12px", margin: "-3px 5px 0 0px" }}
          />
          1
        </div>
      </Flex>
      <Flex>
        <span>Wallet BNB Balance</span>
        <div>
          <img
            src="images/icons/bnb2.svg"
            alt="key"
            style={{ height: "14px", margin: "-1px 5px 0 0px" }}
          />
          0.0934
        </div>
      </Flex>
      <Button>
        <div>Purchase Keys</div>
      </Button>
    </>
  );
};

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 8px 0;
  span {
    color: #cffff9;
  }
`;

const Input = styled.div`
  background: rgba(22, 95, 88, 0.7);
  border-radius: 20px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  input {
    color: #fff;
    background: transparent;
    border: 0;
    padding-left: 10px;
    width: calc(100% - 340px);
    &:focus {
      border: 0;
      outline: 0;
    }
  }
  .key {
    margin: 0 10px;
    height: 14px;
  }
  .nav-pills {
    border-radius: 55px;
    overflow: hidden;
  }
  .nav-item {
    &:first-child {
      margin-left: -5px;
      .nav-link {
        padding-left: 20px;
      }
    }
    &:last-child {
      margin-right: -5px;
      .nav-link {
        padding-right: 20px;
      }
    }
  }
  .nav-link {
    background: rgba(24, 151, 138, 0.8);
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    padding: 4px 16px;
    margin: 0 1.5px;
    border: 1px solid rgba(189, 255, 219, 0.12);
    border-radius: 2px;
    &.active {
      background: rgba(189, 255, 219, 0.45);
    }
  }
  @media screen and (max-width: 1300px) {
    .nav-link {
      font-size: 12px;
      padding: 4px 10px;
    }
  }
  @media screen and (max-width: 500px) {
    flex-flow: wrap;
    .nav {
      margin: auto;
      margin-top: 10px;
    }
    input {
      width: calc(100% - 40px);
    }
  }
`;

const Button = styled.button`
  position: relative;
  border: 0;
  outline: none;
  padding: 12px 40px;
  background: transparent;
  width: 80%;
  max-width: 340px;
  margin: auto;
  display: block;
  div {
    color: #fff;
    position: relative;
    z-index: 10;
    font-weight: 600;
    font-size: 14px;
  }
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: conic-gradient(
        from 186.95deg at 69.61% 50%,
        #c7ffd0 0deg,
        rgba(75, 205, 192, 0.57) 129.37deg,
        #c7ffd0 176.25deg,
        rgba(75, 205, 192, 0.57) 317.74deg,
        #c7ffd0 360deg
      ),
      conic-gradient(
        from 124.51deg at 29.8% 50%,
        #c7ffd0 0deg,
        rgba(75, 205, 192, 0.57) 129.37deg,
        #c7ffd0 176.25deg,
        rgba(75, 205, 192, 0.57) 317.74deg,
        #c7ffd0 358.06deg,
        #c7ffd0 360deg
      );
    mix-blend-mode: normal;
    opacity: 0.65;
    border: 1px solid rgba(189, 255, 219, 0.12);
    box-sizing: border-box;
    box-shadow: 0px 19px 13px rgba(23, 106, 97, 0.44);
    border-radius: 39px;
    transform: rotate(0deg);
  }
`;

const Keys = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  position: relative;
  h3 {
    font-size: 22px;
    font-weight: 700;
  }
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: -36px;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, #c4fef7 0%, rgba(196, 254, 247, 0) 100%);
    opacity: 0.3;
    z-index: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .soundOuter {
    background: rgba(22, 95, 88, 0.5);
    border-radius: 48px;
    padding: 0px 3px;
    img {
      height: 18px;
      width: auto;
      cursor: pointer;
      margin: 8px;
    }
  }

  .switch input {
    display: none;
  }
  .switch {
    display: inline-block;
    width: 36px;
    height: 14px;
    margin: 5px;
    margin-right: 16px;
    position: relative;
  }

  .slider {
    position: absolute;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    border: 4px solid transparent;
    overflow: visible;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    width: 22px;
    height: 22px;
    border-radius: 100px;
    top: -8px;
    transform: translateX(-5px);
    transition: 0.4s;
    background: linear-gradient(0deg, #bafff7, #bafff7),
      conic-gradient(
        from 53deg at 50% 50%,
        #ffffff 0deg,
        #acacac 129.37deg,
        #ffffff 176.25deg,
        #a6a6a6 317.74deg,
        #ffffff 360deg
      );
    background-blend-mode: color, normal;
    box-shadow: inset 0px 1px 0px rgba(186, 255, 247, 0.37);
  }

  .switch input:checked + .slider:before {
    transform: translateX(10px);
  }

  .off {
    font-size: 14px;
    position: absolute;
    white-space: nowrap;
    left: -14px;
    transform: translateX(-100%);
    top: -4px;
    color: rgba(186, 255, 247, 0.6);
    transition: all ease 0.4s;
  }
  .on {
    position: absolute;
    white-space: nowrap;
    font-size: 14px;
    left: -14px;
    transform: translateX(-100%);
    display: none;
    top: -4px;
    color: rgba(186, 255, 247, 0.6);
    transition: all ease 0.4s;
  }
  .switch input:checked ~ .off {
    display: none;
    top: -5px;
  }

  .switch input:checked ~ .on {
    display: block;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    .switch {
      margin-right: -30px;
      margin-bottom: 14px;
    }
  }
`;

export default LeftTab1;
