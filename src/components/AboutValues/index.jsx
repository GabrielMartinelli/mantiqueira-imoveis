import React from "react";
import Svg from "./Svg";
import flag from "@/assets/img/flag.svg";
import vision from "@/assets/img/vision.svg";
import star from "@/assets/img/star.svg";
import { styled } from "styled-components";
import Title from "../Title";

const DivValues = styled.div`
  background-color: var(--dark-blue);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 3rem 0;
  margin-top: -0.3rem;

  @media (max-width: 1164px) {
    flex-direction: column;
    padding: 3rem 3rem;
  }

  div {
    text-align: center;
    width: 360px;
    height: 330px;
    border: 1px solid var(--white);
    box-shadow: 16px 16px var(--green);
    border-radius: 0.25rem;
    padding: 3rem;

    p {
      color: var(--white);
      margin-bottom: 0.3rem;
    }

    @media (max-width: 480px) {
      box-shadow: 8px 8px var(--green);
      padding: 2rem;
    }

    @media (max-width: 1164px) {
      width: 100%;
      height: 100%;
      margin-bottom: 3rem;
      box-shadow: 12px 12px var(--green);
    }
  }
`;

export default function AboutValues() {
  return (
    <section>
      <Svg path="M0 134h1440v-74c-586 216-844-126-1440 0v74z" />
      <DivValues>
        <div>
          <img src={flag} alt="" />
          <Title>Missão</Title>
          <p>
            Facilitar a realização dos sonhos imobiliários dos nossos clientes, fornecendo serviços de alta qualidade,
            transparência e confiança, por meio de uma equipe capacitada e comprometida em superar expectativas.
          </p>
        </div>
        <div>
          <img src={vision} alt="" />
          <Title>Visão</Title>
          <p>
            Ser reconhecida como a principal imobiliária do mercado, oferecendo soluções inovadoras e atendimento
            excepcional, tornando-se a primeira escolha dos clientes em busca de seus sonhos imobiliários.
          </p>
        </div>
        <div>
          <img src={star} alt="" />
          <Title>Valores</Title>
          <p>*Excelência</p>
          <p>*Integridade</p>
          <p>*Comprometimento</p>
          <p>*Inovação</p>
          <p>*Parceria</p>
          <p>*Responsabilidade social e ambiental</p>
        </div>
      </DivValues>
      <Svg path="M 0 0 H 1440 V 60 C 854 276 596 -66 0 60 V 0 Z" />
    </section>
  );
}
