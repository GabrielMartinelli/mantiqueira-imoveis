import React from "react";
import logo from "./logo.png";
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

const NavList = styled.ul`
  display: flex;
  align-items: center;
  color: var(--white);
  margin-right: 2rem;
`;

const List = styled.li`
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 18px;
  padding: 8px;

  &:hover {
    border-bottom: 3px solid var(--green);
    line-height: 1.5;
  }
`;

export default function Header() {
  return (
    <header>
      <Nav>
        <ImgLogo src={logo} alt="Logo da empresa Mantiqueira corretores de Imóveis" />
        <NavList>
          <List>Início</List>
          <List>Imóveis</List>
          <List>Quem somos</List>
          <List>Contato</List>
        </NavList>
      </Nav>
    </header>
  );
}
