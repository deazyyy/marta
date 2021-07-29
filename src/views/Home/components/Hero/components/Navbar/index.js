import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import "./style.scss";
import { useMediaQuery } from "react-responsive";
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  margin-bottom: -30px;
  .nav_left {
    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      margin: 0 20px;
      position: relative;
      &:hover:after {
        width: 100%;
      }
      &:after {
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: rgba(255,255,255,0.8);
        height: 1px;
        transition: all .5s;
      }
    }
  }
  .nav_right {
    display: flex;
    align-items: center;
    color: #fff;
    img {
      height: 22px;
      margin-right: 10px;
    }
    a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      // margin:0;
      &:last-child {
        margin: 0 20px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding-top: 0;
    .nav_left {
      margin-bottom: 0px;
    }
    .nav_right {
      flex-direction: column;
      button {
        margin-top: 10px;
      }
    }
  }
`;

const Mobilenav = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items:center;
  padding-top:20px;
`;

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 991px)" });
  useEffect(() => {
    if (isMobile) {
      let burger = document.getElementById("burger"),
        nav = document.getElementById("main-nav"),
        slowmo = document.getElementById("slowmo");

      let clickEvent = new Event("click");
      burger.addEventListener("click", function (e) {
        this.classList.toggle("is-open");
        nav.classList.toggle("is-open");
        slowmo.classList.toggle("is-slowmo");
      });


    }
  }, [isMobile]);

  return (
    <section className="container">
      {isMobile ? (
        <Mobilenav>
          <div>Logo</div>
          <button id="burger" class="open-main-nav">
            <span class="burger"></span>
          </button>
        </Mobilenav>
      ) : (
        ``
      )}
      <button id="slowmo" style={{ opacity: 0 }}>
        Slow
      </button>

      <nav className={isMobile ? `main-nav` : ``} id="main-nav">
        <Nav>
          <div className="nav_left">
            {!isMobile ? <a href="#">Logo</a> : ``}
            <a href="#">Games</a>
            <a href="#">$Pirate</a>
            <a href="#">Docs</a>
            <a href="#">Shop</a>
          </div>
          <div className="nav_right">
            <a href="#">
              <img src="images/icons/guard.png" alt="row" />
              WatchPlug Adult
            </a>
            <a href="#" className="mx-4">
              <img src="images/icons/bnb.png" alt="row" />
              $0.11
            </a>
            <div class="connect-button">
                <span class="mas">Connect Wallet</span>
                <button type="button" name="Hover">Connect Wallet</button>
            </div>
          </div>
        </Nav>
      </nav>
    </section>
  );
};

export default Navbar;
