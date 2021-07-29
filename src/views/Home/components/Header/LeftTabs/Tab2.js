import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const LeftTab2 = () => {
  return (
    <>
      <div className="header pt-0">
        <h3>Choose Username</h3>
      </div>
      <div className="c-g">*required for Referrals</div>
      <UserInput>
        <input placeholder="Enter a Username" />
        <Button>
          <div>Register</div>
        </Button>
        <Info>
          allowed: a-z, 0-9, and spaces <br /> min of 1 char <br /> max of 32
          chars
        </Info>
      </UserInput>
    </>
  );
};

const Info = styled.div`
  margin: 20px auto 0;
  max-width: 250px;
  text-align: center;
`;
const UserInput = styled.div`
  width: 80%;
  margin: 20px auto 0;
  input {
    background: rgba(22, 95, 88, 0.7);
    border-radius: 20px;
    border: 0;
    outline: 0;
    display: block;
    width: 100%;
    color: #fff;
    padding: 10px 24px;
    margin-bottom: 10px;
    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }
`;

const Button = styled.button`
  position: relative;
  border: 0;
  outline: none;
  margin-top: 26px;
  background: transparent;
  width: 100%;
  margin: auto;
  display: block;
  padding: 2px;
  div {
    color: #fff;
    position: relative;
    z-index: 10;
    font-weight: 600;
    font-size: 14px;
    background: #20877d;
    padding: 10px 40px;
    border-radius: 39px;
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

export default LeftTab2;
