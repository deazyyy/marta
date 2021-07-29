import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const RightTab2 = () => {
  return (
    <>
      <div className="header">
        <h3>Recent Key Purchases</h3>
        <h5>The pirates who plundered of late, arrgh!</h5>
      </div>
      <RowOuter>
        <Row>
          <h4>Ashish</h4>
          <div>
            1.0082
            <img
              src="images/icons/key2.svg"
              alt="key"
              style={{ height: "18px", margin: "-5px 0px 0 6px" }}
            />
            <div>Block 871727</div>
          </div>
        </Row>
        <Row>
          <h4>Ashish</h4>
          <div>
            1.0082
            <img
              src="images/icons/key2.svg"
              alt="key"
              style={{ height: "18px", margin: "-5px 0px 0 6px" }}
            />
            <div>Block 871727</div>
          </div>
        </Row>
        <Row>
          <h4>Ashish</h4>
          <div>
            1.0082
            <img
              src="images/icons/key2.svg"
              alt="key"
              style={{ height: "18px", margin: "-5px 0px 0 6px" }}
            />
            <div>Block 871727</div>
          </div>
        </Row>
        <Row>
          <h4>Ashish</h4>
          <div>
            1.0082
            <img
              src="images/icons/key2.svg"
              alt="key"
              style={{ height: "18px", margin: "-5px 0px 0 6px" }}
            />
            <div>Block 871727</div>
          </div>
        </Row>
        <Row>
          <h4>Ashish</h4>
          <div>
            1.0082
            <img
              src="images/icons/key2.svg"
              alt="key"
              style={{ height: "18px", margin: "-5px 0px 0 6px" }}
            />
            <div>Block 871727</div>
          </div>
        </Row>
        <Row>
          <h4>Ashish</h4>
          <div>
            1.0082
            <img
              src="images/icons/key2.svg"
              alt="key"
              style={{ height: "18px", margin: "-5px 0px 0 6px" }}
            />
            <div>Block 871727</div>
          </div>
        </Row>
        <Row>
          <h4>Ashish</h4>
          <div>
            1.0082
            <img
              src="images/icons/key2.svg"
              alt="key"
              style={{ height: "18px", margin: "-5px 0px 0 6px" }}
            />
            <div>Block 871727</div>
          </div>
        </Row>
        <Row>
          <h4>Ashish</h4>
          <div>
            1.0082
            <img
              src="images/icons/key2.svg"
              alt="key"
              style={{ height: "18px", margin: "-5px 0px 0 6px" }}
            />
            <div>Block 871727</div>
          </div>
        </Row>
      </RowOuter>
    </>
  );
};

const RowOuter = styled.div`
margin-top:10px;
max-height:220px;
overflow-y:scroll;
overflow-x:hidden;
padding-right:20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:12px 0;
  div {
    text-align: right;
    font-size:15px;
  }
  h4 {
    font-size: 18px;
    font-weight:600;
  }
`;

export default RightTab2;
