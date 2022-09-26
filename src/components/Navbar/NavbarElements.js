import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: #264653;
  height: 80px;
  margin-top: -80px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1500px;
`;
export const NavLogo = styled(LinkR) `
  color:#E9C46A;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  text-decoration: none;

@media screen and (max-width: 768px) {
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  font-size: 18px;
}
`;
export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.7rem;
    cursor: pointer;
    color: #fff;
  } 
`;
export const NavMenu = styled.ul`
  display:flex;
  justify-content: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  height: 80px;
`;
export const NavLinks = styled(LinkS)`
  color: #E9C46A;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: larger;
  
  &.active {
    text-decoration: line-through;
    font-weight: bolder;
  }
`;
export const Img = styled.img`
    width: 55px;
    height: auto;
    margin-top: 8px;
`;
export const NavH1 = styled.h1`
  color: #E9C46A;
  font-size: 23px;
  margin-top: 18px;
  font-weight: normal;
  
`