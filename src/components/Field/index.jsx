import React from "react";
import { styled } from "styled-components";

const InputStyle = styled.input`
  height: 2rem;
  padding: 1rem;
  width: 100%;
  margin: 1rem 0;
  border: none;

  &.button-search {
    height: 100%;
    padding: 1rem 3rem;
    border-radius: 10px;
    margin: 1rem;
    width: auto;
    background-color: rgb(12, 169, 112, 0.8);
    color: var(--white);
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
  }

  &.button {
    padding: 0;
    background-color: var(--green);
    color: var(--white);
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  &.button:hover {
    background-color: var(--dark-green);
  }
`;

export default function Field({ type, placeholder, required, valueInput, change, classStyle }) {
  return (
    <InputStyle
      className={classStyle}
      type={type}
      placeholder={placeholder}
      onChange={(evento) => change(evento.target.value)}
      value={valueInput}
      required={required}
    />
  );
}
