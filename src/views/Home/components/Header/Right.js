import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./left.scoped.scss";

import RightTab1 from "./RightTabs/Tab1";
import RightTab2 from "./RightTabs/Tab2";
import RightTab3 from "./RightTabs/Tab3";

const Right = () => {
  return (
    <>
      <Box className="right_bx tab-content">
        <div id="tabr1" className="tab-pane active">
          <RightTab1 />
        </div>

        {/* Second tab */}
        <div id="tabr2" className="tab-pane fade">
          <RightTab2 />
        </div>

        {/* Third tab */}
        <div id="tabr3" className="tab-pane fade">
          <RightTab3 />
        </div>
      </Box>
    </>
  );
};

const Box = styled.div`
  padding: 20px 16px 20px 36px;
  width: 50%;
  min-height:346px;
  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 36px;
  }
`;

export default Right;
