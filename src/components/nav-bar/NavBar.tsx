import React, { Component } from 'react';
// import logo from '../logo.svg';
import { animateScroll as scroll, Link } from 'react-scroll';
import { SectionsData } from 'sections';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  text-align: center;
  letter-spacing: 0.18px;
  font-size: 18px;
  font-family: 'DIN Condensed';
  color: #333333;
  z-index: 2;
  position: fixed;
  display: flex;
  opacity: 1;
  padding: 22px 28px 0 35px;
  width: 100%;
`;

const StyledLogo = styled.div`
  font-family: 'DIN Condensed';
  font-size: 28px;
  margin-rig
`;

export class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <StyledNavBar id='navbar'>
        <StyledLogo> LOGO </StyledLogo>
        <div className='nav-content'>
          <ul className='nav-items'>
            {[
              SectionsData.about,
              SectionsData.community,
              SectionsData.location,
              SectionsData.ourMenu,
              SectionsData.recipes
            ].map(section => {
              return (
                <li className='nav-item' key={section.id}>
                  <Link
                    activeClass='active'
                    to={section.id}
                    spy={true}
                    smooth={true}
                  >
                    {section.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </StyledNavBar>
    );
  }
}
