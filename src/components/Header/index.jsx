import React from "react";
import logo from "./logo.png";
import whatsapp from "./whatsapp.png";
import { styled } from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-blue);
  opacity: 0.9;
  width: 100%;
  position: fixed;
  z-index: 100;
`;

const ImgLogo = styled.img`
  margin-left: 2rem;
`;

const ImgIcon = styled.img`
  margin-right: 2rem;
  cursor: pointer;

  &:hover {
    width: 33px;
    transition: 0.9s linear;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  color: var(--white);
`;

const List = styled.li`
  margin: 0 0.5rem;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  padding: 8px;

  &:hover {
    border-bottom: 2px solid var(--white);
    line-height: 1.5;
  }
`;

export default function Header() {
  return (
    <header>
      <Nav>
        <ImgLogo src={logo} />
        <NavList>
          <List>Início</List>
          <List>Imóveis</List>
          <List>Quem somos</List>
          <List>Contato</List>
        </NavList>
        <ImgIcon src={whatsapp} />
      </Nav>
    </header>
  );
}
