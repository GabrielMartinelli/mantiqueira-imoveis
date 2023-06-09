import React from "react";
import { styled } from "styled-components";

const InputStyle = styled.input`
  height: 2rem;
  padding: 1rem;
  width: 100%;
  margin: 1rem 0;
  border: none;
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
