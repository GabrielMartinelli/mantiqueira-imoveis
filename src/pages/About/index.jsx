import Title from "@/components/Title";
import React from "react";
import { styled } from "styled-components";
import fachada from "@/pages/About/fachada.jpg";
import AboutValues from "@/components/AboutValues";
import AboutProfiles from "@/components/AboutProfiles";

const SectionAbout = styled.section`
  padding-top: var(--padding-top-header);
  display: flex;
  justify-content: center;
`;

const DivAbout = styled.div`
  width: 1290px;
  margin: 0 2rem 2rem 2rem;
  display: flex;
  align-items: center;

  @media (max-width: 1227px) {
    flex-direction: column;
    margin-bottom: 4rem;
  }
`;

const Paragraph = styled.p`
  margin-right: 4rem;
  text-align: justify;

  &.secundary {
    text-align: center;
    color: var(--dark-blue);
    font-weight: 600;
  }

  @media (max-width: 1227px) {
    margin-right: 0;
  }
`;

const ImgAbout = styled.img`
  width: 590px;
  height: 420px;
  margin: 2rem 0;
  border-radius: 15px;

  @media (max-width: 1227px) {
    width: 100%;
    height: 100%;
  }
`;

export default function About() {
  return (
    <>
      <SectionAbout>
        <DivAbout>
          <div>
            <Title actionTitle="about">Quem somos</Title>
            <Paragraph>
              A <b>Mantiqueira Corretores de Imóveis</b> é uma imobiliária de destaque em Andradas e região, conhecida
              por sua confiabilidade e profissionalismo. <br />
              <br />
              Nossa equipe experiente e dedicada está comprometida em fornecer serviços excepcionais e soluções
              imobiliárias personalizadas para atender às necessidades de nossos clientes. Mantendo-nos atualizados
              sobre as últimas tendências do mercado e regulamentações, oferecemos conselhos precisos e relevantes aos
              nossos clientes.
              <br />
              <br />
              Colocamos o cliente em primeiro lugar, ouvindo atentamente suas demandas e fornecendo soluções
              personalizadas para alcançar suas expectativas.
              <br />
              <br /> Valorizamos a transparência e a honestidade, estabelecendo relacionamentos de confiança e
              oferecendo resultados excepcionais. <br />
              <br />
              Estamos entusiasmados em ajudá-lo a alcançar seus objetivos imobiliários, seja encontrando a propriedade
              perfeita, vendendo seu imóvel com sucesso ou recebendo conselhos especializados em investimentos
              imobiliários.
              <br />
              <br />
            </Paragraph>
            <Paragraph className="secundary">
              Na Mantiqueira Corretores de Imóveis, sua satisfação é nossa principal prioridade!
            </Paragraph>
          </div>
          <div>
            <ImgAbout
              src={fachada}
              alt="Foto de um ponto comercial, com um letreiro escrito Mantiqueira Corretores de Imóveis, uma porta de vidro no meio, do lado esquerdo outro letreiro escrito Compra, Venda, Locação, também com os telefones dos corretores abaixo"
            />
          </div>
        </DivAbout>
      </SectionAbout>
      <AboutValues />
      <AboutProfiles />
    </>
  );
}
