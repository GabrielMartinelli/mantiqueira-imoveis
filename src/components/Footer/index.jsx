import React from "react";
import { styled } from "styled-components";
import location from "./location.png";
import agentIcon from "./agent.png";
import Map from "../Map";
import Items from "../Items";
import insta from "./insta.png";
import face from "./face.png";
import Title from "../Title";

const FooterStyle = styled.footer`
  border-top: 4px solid var(--green);
  background-color: var(--dark-blue);
`;

const SectionFooter = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  border-bottom: 1px solid var(--green);
  padding: 4rem;

  &.social {
    justify-content: center;
    border-bottom: 0;
    padding: 2rem 4rem 0rem 4rem;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

const DivFooter = styled.div`
  text-align: center;
  margin: ${(props) => (props.social ? "2rem 0" : "0")};
`;

const Paragraph = styled.p`
  color: ${(props) => (props.secundary ? "var(--green)" : "var(--white)")};
  margin: 0.5rem 0;
  font-size: 18px;

  &.small {
    font-size: 14px;
    margin-bottom: 2rem;
  }
`;

const ListAgent = styled.ul`
  display: flex;
  align-items: center;

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

const ImgIcon = styled.img`
  margin: 0 1rem;
  width: 52px;
  height: 52px;
  cursor: pointer;

  &:hover {
    background-color: var(--white);
    border-radius: 50%;
  }
`;

export default function Footer() {
  const agent = [
    {
      id: 1,
      name: "Fausto Braga",
      cellphone: "998234850",
      creci: "45142",
    },
    {
      id: 2,
      name: "Rafael Rangel",
      cellphone: "991509040",
      creci: "37791",
    },
    {
      id: 3,
      name: "Tiago Martinelli",
      cellphone: "998985310",
      creci: "51338",
    },
  ];

  return (
    <FooterStyle>
      <SectionFooter>
        <DivFooter>
          <img src={location} alt="Ícone de localização" />
          <Title>Endereço</Title>
          <Paragraph>Praça Dr Alcides Mosconi, 46 - Centro</Paragraph>
          <Paragraph>Andradas - MG</Paragraph>
          <Paragraph>37795-000</Paragraph>
          <Paragraph secundary="true" className="small">
            * Atendimento de segunda a sexta-feira das 08:00 às 17:00h
          </Paragraph>
        </DivFooter>
        <Map />
      </SectionFooter>
      <SectionFooter>
        <DivFooter>
          <img src={agentIcon} alt="Ícone de uma pessoa segurando uma casa" />
          <Title>Corretores</Title>
        </DivFooter>
        <ListAgent>
          {agent.map((agent) => {
            return <Items key={agent.id} name={agent.name} cell={agent.cellphone} creci={agent.creci} />;
          })}
        </ListAgent>
      </SectionFooter>
      <SectionFooter className="social">
        <DivFooter>
          <Title actionTitle="footer">Siga-nos :)</Title>
          <DivFooter social="true">
            <a href="https://www.instagram.com/mantiqueiracorretoradeimoveis/" target="_blank">
              <ImgIcon src={insta} alt="Ícone do Instagram" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100082962807867&mibextid=ZbWKwL" target="_blank">
              <ImgIcon src={face} alt="Ícone do Facebook" />
            </a>
          </DivFooter>
          <Paragraph className="small">
            <a href="https://gabrielmartinellidev.vercel.app/" target="_blank">
              Desenvolvido por Gabriel Martinelli
            </a>
          </Paragraph>
        </DivFooter>
      </SectionFooter>
    </FooterStyle>
  );
}
