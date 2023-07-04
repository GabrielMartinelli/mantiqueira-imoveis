import Title from "@/components/Title";
import React from "react";
import { styled } from "styled-components";
import notFoundImg from "./notFound.png";
import { NavLink } from "react-router-dom";

const SectionNotFound = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: var(--padding-top-header);
  padding-bottom: 4rem;
`;

const SubTitle = styled.h2`
  text-align: center;
  color: black;
  font-weight: 500;
  margin-bottom: 2rem;
`;

const DivReturn = styled.div`
  font-weight: 700;
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--green);
    color: var(--white);
    border-color: var(--green);
  }
`;

export default function NotFound() {
  return (
    <SectionNotFound>
      <img src={notFoundImg} alt="Imagem de uma tela de um computador com um X" />
      <Title actionTitle="notFound">Ops! Página não encontrada</Title>
      <SubTitle>A página que você está procurando não existe ou foi movida.</SubTitle>
      <NavLink to={"./"}>
        <DivReturn>Página Inicial</DivReturn>
      </NavLink>
    </SectionNotFound>
  );
}
