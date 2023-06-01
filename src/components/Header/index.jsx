import React, { useContext } from "react";
import logo from "./logo.png";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";
import Burguer from "./Burguer";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-blue);
  transition: all 0.3s ease;
  width: 100%;
  height: ${(props) => (props.action == "true" ? "100px" : "120px")};
  position: fixed;
  z-index: 100;

  a.active {
    color: var(--green);
    font-weight: 500;
  }
`;

const ImgLogo = styled.img`
  margin-left: 2rem;
  transition: all 0.3s ease;
  width: ${(props) => (props.action == "true" ? "200px" : "260px")};
  height: ${(props) => (props.action == "true" ? "120px" : "140px")};

  @media (max-width: 800px) {
    width: 200px;
    height: 120px;
  }
`;

export default function Header({ action }) {
  return (
    <header>
      <Nav action={action.toString()}>
        <NavLink to={"./"}>
          <ImgLogo action={action.toString()} src={logo} alt="Logo da empresa Mantiqueira corretores de Imóveis" />
        </NavLink>
        <Burguer />
      </Nav>
    </header>
  );
}
