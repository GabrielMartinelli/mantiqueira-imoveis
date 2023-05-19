import React from "react";
import logo from "./logo.png";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import MenuLink from "../MenuLink";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-blue);
  opacity: ${(props) => (props.action == "true" ? "1" : "0.7")};
  transition: opacity 0.3s ease;
  width: 100%;
  height: 120px;
  position: fixed;
  z-index: 100;

  a.active {
    color: var(--green);
    font-weight: 500;
  }
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

export default function Header({ action }) {
  return (
    <header>
      <Nav action={action.toString()}>
        <NavLink to={"./"}>
          <ImgLogo src={logo} alt="Logo da empresa Mantiqueira corretores de Imóveis" />
        </NavLink>
        <NavList>
          <MenuLink name={"Início"} path={"./"} />
          <MenuLink name={"Imóveis"} path={"/imoveis"} />
          <MenuLink name={"Quem somos"} path={"/quem-somos"} />
          <MenuLink name={"Contato"} path={"/contato"} />
        </NavList>
      </Nav>
    </header>
  );
}
