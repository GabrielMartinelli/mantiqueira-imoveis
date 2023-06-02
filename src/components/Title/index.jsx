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

  &.search {
    text-shadow: 0 0 15px var(--black);
    text-transform: uppercase;
    font-size: 48px;
    color: var(--white);
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 470px) {
      font-size: 36px;
    }
  }

  &.search-sub {
    text-shadow: 0 0 15px var(--black);
    font-size: 28px;
    color: var(--white);
    margin-bottom: 2rem;
    font-weight: 500;

    @media (max-width: 470px) {
      font-size: 24px;
    }
  }
`;

export default function Title({ children, actionTitle }) {
  return <TitleStyle className={actionTitle}>{children}</TitleStyle>;
}
