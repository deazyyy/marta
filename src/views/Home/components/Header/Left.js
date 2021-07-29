import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./left.scoped.scss";
import LeftTab1 from "./LeftTabs/Tab1";
import LeftTab2 from "./LeftTabs/Tab2";
import LeftTab3 from "./LeftTabs/Tab3";

const Left = () => {
  return (
    <>
      <Box className="left_bx tab-content">
        <div id="tabl1" className="tab-pane active">
          <LeftTab1 />
        </div>
        <div id="tabl2" className="tab-pane fade">
          <LeftTab2 />
        </div>
        <div id="tabl3" className="tab-pane fade">
          <LeftTab3 />
        </div>
      </Box>
    </>
  );
};

const Box = styled.div`
  padding: 20px 36px;
  width: 50%;
  min-height:346px;
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 36px;
  }
`;

export default Left;
