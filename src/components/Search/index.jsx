import React from "react";
import { styled } from "styled-components";
import banner from "/img/background-banner.jpg";
import Title from "../Title";
import DropdownList from "../DropdownList";
import Field from "../Field";

const Section = styled.section`
  padding-top: var(--padding-top-header);
  background: url(${banner}) top;
  background-size: cover;
  position: relative;
  min-height: 660px;

  div {
    position: relative;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function Search() {
  const finality = ["Alugar", "Comprar"];
  const type = ["Apartamento", "Casa", "Chácaras/Sítios", "Comercial", "Terrenos"];
  return (
    <Section>
      <div>
        <Title actionTitle="search">
          Mantiqueira <br></br>Corretores de Imóveis
        </Title>
        <Title actionTitle="search-sub">O que você está buscando?</Title>
        <Form>
          <DropdownList typeDescription={finality} description="Qual a finalidade?" />
          <DropdownList typeDescription={type} description="Tipo de Imóvel?" />
          <Field classStyle="button-search" type="submit" valueInput="Buscar" />
        </Form>
      </div>
    </Section>
  );
}
