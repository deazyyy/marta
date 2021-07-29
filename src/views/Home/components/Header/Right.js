import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import './left.scoped.scss'
const Box = styled.div`
    padding:20px 36px;
    width:50%;
    @media screen and (max-width: 1000px) {
        width: 100%;
        padding: 36px;
      }
`
const Flex = styled.div`
    display:flex;
    justify-content:space-between;
    font-size:14px;
    margin:21px 0;
   .lflex{
       color:rgba(207, 255, 249, 0.6);
       h3{
        color: #CFFFF9;
        font-size:18px;
        margin-bottom:6px
       }
   }
   .rflex{
    color: #CFFFF9;
    text-align:right;
    h3{
     color: #fff;
     font-size:20px;
     margin-bottom:4px
    }
}
`


const Button = styled.button`
  position: relative;
  border: 0;
  outline: none;
  margin-top: 26px; 
  background: transparent;
  width: 80%;
  max-width: 340px;
  margin: auto;
  display: block;
  padding:2px;
  div {
    color: #fff;
    position: relative;
    z-index: 10;
    font-weight: 600;
    font-size:14px;
    background:#20877D;
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


const Right = () => {
  return (
    <>  
        <Box className="right_bx">
            <div className="header">
                <h6>Round 4</h6>
                <h5>Round ends in</h5>
                <h3>00:00:13</h3>
            </div>
            
            <Flex> 
                <div className="lflex">
                    <h3>Tresure Chest Size</h3>
                    <div>3245.00000 Keys</div>
                </div>
                <div className="rflex">
                    <h3>7.7601500</h3>
                    <div>-$0.0001500</div>
                </div>
            </Flex>
            <Flex> 
                <div className="lflex">
                    <h3>Pirate Vault</h3>
                </div>
                <div className="rflex">
                    <h3>7.7601500</h3>
                    <div>-$0.0001500</div>
                </div>
            </Flex> 
            <Button>
                <div>Withdraw Earnings</div>
            </Button>
        </Box>
    </>
  )
}

export default Right
