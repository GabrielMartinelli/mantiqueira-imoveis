import React from "react";
import { styled } from "styled-components";

const TitleStyle = styled.h3`
  margin: 1rem 0;
  text-align: center;
  font-size: 20px;
  color: var(--white);

  &.footer {
    margin: 0;
  }

  &.contact {
    font-size: 32px;
    color: var(--white);
    margin-bottom: 3rem;
    font-weight: 700;
  }

  &.about {
    text-align: left;
    font-size: 32px;
    color: var(--black);
    margin-bottom: 2rem;
    font-weight: 700;
  }
`;

export default function Title({ children, actionTitle }) {
  return <TitleStyle className={actionTitle}>{children}</TitleStyle>;
}
