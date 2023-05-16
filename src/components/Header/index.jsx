import React from "react";
import logo from "./logo.png";
import whatsapp from "./whatsapp.png";
import { styled } from "styled-components";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--dark-blue);
  opacity: 0.8;
  width: 100%;
  position: fixed;
  z-index: 100;
`;

const ImgLogo = styled.img`
  margin-left: 2rem;
`;

const ImgIcon = styled.img`
  width: 24px;
  margin-left: 1rem;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  color: var(--white);
`;

const NavListContact = styled.ul`
  display: flex;
  flex-direction: column;
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
    border-bottom: 3px solid var(--white);
    line-height: 1.5;
  }
`;

const LinkContact = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem;
  width: 120px;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: var(--white);
    color: var(--dark-blue);
  }
`;

const TextSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
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
        <NavListContact>
          <li>
            <LinkContact
              href="https://api.whatsapp.com/send?phone=5535998234850&text=Olá Fausto, estou a procura de um imóvel, poderia me ajudar?"
              target="_blank"
              rel="noopener"
            >
              <TextSpan>Fausto</TextSpan>
              <ImgIcon src={whatsapp} />
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="https://api.whatsapp.com/send?phone=5535991509040&text=Olá Rafael, estou a procura de um imóvel, poderia me ajudar?"
              target="_blank"
              rel="noopener"
            >
              <TextSpan>Rafael</TextSpan>
              <ImgIcon src={whatsapp} />
            </LinkContact>
          </li>
          <li>
            <LinkContact
              href="https://api.whatsapp.com/send?phone=5535998985310&text=Olá Tiago, estou a procura de um imóvel, poderia me ajudar?"
              target="_blank"
              rel="noopener"
            >
              <TextSpan>Tiago</TextSpan>
              <ImgIcon src={whatsapp} />
            </LinkContact>
          </li>
        </NavListContact>
      </Nav>
    </header>
  );
}
