import React from "react";
import { styled } from "styled-components";

const ButtonStyle = styled.button`
  padding: 1rem;
  border: none;
  background-color: var(--color-button);
  transition: all 0.3s ease-in-out;

  &.button-search {
    margin: 1rem;
    height: 55px;
    padding: 0 2rem;
    border-radius: 10px;
  }

  &.button-contact {
    margin: 1rem 0;
  }

  &:hover {
    background-color: var(--dark-green);
  }
`;

export default function Button({ classStyle, children, type }) {
  return (
    <ButtonStyle type={type} className={classStyle}>
      {" "}
      {children}
    </ButtonStyle>
  );
}
