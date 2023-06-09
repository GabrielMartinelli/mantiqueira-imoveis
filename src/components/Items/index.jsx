import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { styled } from "styled-components";

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
    box-shadow: 3px 2px 2px black;
    border-radius: 0 0 15px 0;
    color: var(--dark-blue);

    svg {
      width: 22px;
      background-color: var(--white);
      border-radius: 5px;
    }
  }

  @media (max-width: 630px) {
    opacity: 0.8;
    margin-bottom: 2rem;
    background-color: var(--green);
    border-bottom: 4px solid var(--white);
    box-shadow: 2px 1px 1px black;
    border-radius: 0 0 15px 0;
    color: var(--dark-blue);

    svg {
      width: 22px;
      background-color: var(--white);
      border-radius: 5px;
    }
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
    &.styleBlueDark {
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
        <TextSpan className="styleBlue">{name}</TextSpan>
        <TextSpan>CRECI {creci}</TextSpan>
        <TextSpan className="styleBlueDark">(35) {cell}</TextSpan>
        <FaWhatsappSquare size={64} color="#0ca970" />
      </LinkContact>
    </li>
  );
}
