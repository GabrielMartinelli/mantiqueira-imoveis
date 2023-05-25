import { MenuOpenContext } from "@/common/context/MenuOpen";
import MenuLink from "@/components/MenuLink";
import React, { useContext, useState } from "react";
import { styled } from "styled-components";

const NavList = styled.ul`
  display: flex;
  align-items: center;
  color: var(--white);
  margin-right: 2rem;
  flex-flow: row nowrap;

  @media (max-width: 800px) {
    margin-right: 0rem;
    flex-flow: column nowrap;
    background-color: var(--dark-blue);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 10rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export default function NavBar() {
  const { open, setOpen } = useContext(MenuOpenContext);
  return (
    <NavList open={open} onClick={() => setOpen(!open)}>
      <MenuLink name={"Início"} path={"./"} />
      <MenuLink name={"Imóveis"} path={"/imoveis"} />
      <MenuLink name={"Quem somos"} path={"/quem-somos"} />
      <MenuLink name={"Contato"} path={"/contato"} />
    </NavList>
  );
}
