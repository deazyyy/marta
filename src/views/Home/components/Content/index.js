import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./style.scss";
const Box = styled.div`
  padding: 36px;
  background: rgba(223, 255, 251, 0.5);
  box-shadow: 0px 10px 42px rgba(24, 149, 133, 0.33);
  border-radius: 10px;
  color: rgba(9, 58, 52, 0.7);
  font-size: 15px;
  margin-bottom: 32px;
  h3 {
    font-size: 20px;
    color: #093a34;
    font-weight: 700;
    margin-bottom: 16px;
  }
  .btn_outer {
    display: flex;
    justify-content: space-between;
    button {
      display: flex;
      justify-content: center;
      width: calc(50% - 10px);
      white-space: nowrap;
      margin-left: 0;
      margin-right: 0;
      // &:last-child{
      //     margin-left:10px;
      // }
    }
    
  }
  @media screen and (max-width: 600px) {
    .btn_outer
    {
        flex-direction:column;
        button{
            width:100%;
            white-space: break-spaces;
        }
    }
    button{
        white-space: break-spaces;
    }
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin: 16px 0;
  color: #093a34;
  h4,
  h5 {
    color: #093a34;
    font-weight: 700;
  }
  h4 {
    font-size: 18px;
  }
  h5 {
    font-size: 16px;
  }
  img {
    width: 60px;
    height: 60px;
    margin-right: 14px;
  }
  div {
    color: rgba(9, 58, 52, 0.7);
    margin-top: 10px;
  }
  .lrow {
    display: flex;
    align-items: center;
  }
  .rrow {
    color: #cffff9;
    text-align: right;
    h3 {
      color: #fff;
      font-size: 20px;
      margin-bottom: 4px;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction:column;
    margin-bottom:26px;
    .lrow{
        flex-direction:column;
        text-align:center;
        img{
            margin-bottom:8px
        }
    }

  }
`;

const Button = styled.button`
  position: relative;
  border: 0;
  overflow: hidden;
  outline: none;
  margin-top: 26px;
  background: transparent;
  margin: auto;
  white-space: nowrap;
  display: block;
  padding: 12px 40px;
  border-radius: 39px;
  color: #093a34;
  font-weight: 700;
  font-size: 14px;
  background: rgba(92, 209, 195, 0.3);
  margin-top: 26px;
`;

const Content = () => {
  return (
    <section
      className="container content_container"
      style={{ marginTop: "32px" }}
    >
      <div className="row">
        <div className="col-md-6">
          <Box>
            <h3>A Buccaneer's Tip</h3>
            If you are attempting to snipe the final key, make sure you are
            buying slightly more than 1 key, eg 1.1 keys. Why? If someone bought
            a key right before you did, the key you are purchasing will cost
            slightly more. Thus, the amount you are paying in BNB might be less
            than 1 full key.
          </Box>
          <Box>
            <h3>Buying KEY vs $PIRATE</h3>
            Buying a Key KEY gives you (1) an opportunity to{" "}
            <b>win the chest prize</b> if you are the last holder. You also (2){" "}
            <b>earn passive income</b> from a portion of any Key KEYs purchased
            after yours. <br />
            Buying Key $PIRATE is <b>investing</b> in TreasureKey. Key $PIRATE
            token holders will receive <b>5% of key purchases</b>. Holders must
            stake in the AutoShark pool to receive rewards.
          </Box>
          <div className="row row_small">
            <div className="col-md-6 col_small">
              <Box>
                <h3>Stake $PIRATE</h3>
                at AutoShark for more passive income
                <Button>Stake Here</Button>
              </Box>
            </div>
            <div className="col-md-6 col_small">
              <Box>
                <h3>Stake $PIRATE</h3>
                at AutoShark for more passive income
                <Button>Buy Here</Button>
              </Box>
            </div>
          </div>
          <Box>
            <h3>What is Bsc Chest?</h3>
            The Bsc Chest is a FOMO-3D inspired game. Players can buy into the
            chest, and the lion's share goes to the last buyer who buys a key.
            Building on the Binance Smart Chain (BSC) allows for (1) lower gas
            fees, (2) faster transactions and (3) less congestion.
            <Button>Bsc Chest Rules & Distribution</Button>
          </Box>
        </div>

        <div className="col-md-6">
          <Box>
            <h3>Wallet Watcher feature</h3>
            Want to increase your chances at winning? Activate this feature by
            holding <b>100 $PIRATE</b> in your wallet. You get to observe your
            opponents' wallet balance here in real-time!
          </Box>
          <Box>
            <h3>Backups & Mirrors</h3>
            Alternatives in case this site goes down. Open the links below and
            bookmark them.
            <div className="btn_outer">
              <Button>Backup 1</Button>
              <Button>Contract Interaction</Button>
            </div>
          </Box>
          <Box>
            <h3>Our Partners</h3>
            The pirates of Treasure Key have partnered with several notable
            projects on the Binance Smart Chain to bring you the Bsc Chest.
            <Row>
              <div className="lrow">
                <img src="images/r-1.png" alt="row" />
                <div className="m-0">
                  <h4>Panther PantherSwap</h4>
                  <div>Automated Market Maker</div>
                </div>
              </div>
              <div className="rrow">
                <h5>Burn $PANTHER</h5>
                <div>1% of Keys Bought</div>
              </div>
            </Row>
            <Row>
              <div className="lrow">
                <img src="images/r-2.png" alt="row" />
                <div className="m-0">
                  <h4>Panther PantherSwap</h4>
                  <div>Automated Market Maker</div>
                </div>
              </div>
              <div className="rrow">
                <h5>Burn $PANTHER</h5>
                <div>1% of Keys Bought</div>
              </div>
            </Row>
            <Row>
              <div className="lrow">
                <img src="images/r-3.png" alt="row" />
                <div className="m-0">
                  <h4>Panther PantherSwap</h4>
                  <div>Automated Market Maker</div>
                </div>
              </div>
              <div className="rrow">
                <h5>Burn $PANTHER</h5>
                <div>1% of Keys Bought</div>
              </div>
            </Row>
            <Row>
              <div className="lrow">
                <img src="images/r-4.png" alt="row" />
                <div className="m-0">
                  <h4>Panther PantherSwap</h4>
                  <div>Automated Market Maker</div>
                </div>
              </div>
              <div className="rrow">
                <h5>Burn $PANTHER</h5>
                <div>1% of Keys Bought</div>
              </div>
            </Row>
            <Button>Bsc Chest Rules & Distribution</Button>
          </Box>
        </div>
      </div>
    </section>
  );
};

export default Content;
