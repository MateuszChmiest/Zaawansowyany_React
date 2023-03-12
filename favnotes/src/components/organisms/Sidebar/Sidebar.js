import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';

const SidebarWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.note)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.p`
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
  margin-bottom: 10vh;
`;

const StyledLinks = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogout = styled(ButtonIcon)`
    margin-top: auto;
`;

const Sidebar = ({pageType}) => (
  <SidebarWrapper activeColor={pageType}>
    <StyledLogo>
      FAV
      <br />
      NOTE.
    </StyledLogo>
    <StyledLinks>
      <ButtonIcon as={NavLink} to="/" icon={penIcon} activeclass="active"/>
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active"/>
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active"/>
    </StyledLinks>
    <StyledLogout as={NavLink} to="/login" icon={logoutIcon} />
  </SidebarWrapper>
);

export default Sidebar;
