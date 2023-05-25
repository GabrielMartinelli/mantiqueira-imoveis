import React from "react";
import whatsapp from "./whatsapp.png";
import { styled } from "styled-components";

const ImgIcon = styled.img`
  width: 24px;
  margin-left: 1rem;
  cursor: pointer;
`;

const LinkContact = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  height: 155px;
  cursor: pointer;

  &:hover {
    background-color: var(--green);
    border-bottom: 3px solid var(--white);
    box-shadow: 2px 1px 1px black;
    border-radius: 0 0 15px 0;
    color: var(--dark-blue);
  }

  @media (max-width: 630px) {
    opacity: 0.8;
    margin-bottom: 2rem;
    background-color: var(--green);
    border-bottom: 3px solid var(--white);
    box-shadow: 2px 1px 1px black;
    border-radius: 0 0 15px 0;
    color: var(--dark-blue);
  }
`;

const TextSpan = styled.span`
  font-size: 18px;
  text-align: center;
  font-weight: 500;
  width: 100%;
  margin: 0.5rem 2rem;
  color: var(--white);

  @media (max-width: 630px) {
    &.nameAgent {
      color: var(--dark-blue);
      font-weight: 600;
    }
  }
`;

export default function Items({ name, cell, creci }) {
  return (
    <li>
      <LinkContact
        href={`https://api.whatsapp.com/send?phone=5535${cell}&text=Olá ${name}, estou a procura de um imóvel, poderia me ajudar?`}
        target="_blank"
      >
        <TextSpan className="nameAgent">{name}</TextSpan>
        <TextSpan>CRECI {creci}</TextSpan>
        <TextSpan>(35) {cell}</TextSpan>
        <ImgIcon src={whatsapp} alt="Logo do whatsapp" />
      </LinkContact>
    </li>
  );
}
