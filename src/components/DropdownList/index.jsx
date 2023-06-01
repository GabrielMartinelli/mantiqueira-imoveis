import React from "react";
import { styled } from "styled-components";

const Select = styled.select`
  padding: 1rem 3rem 1rem 1rem;
  margin: 0.5rem;
  font-size: 18px;
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 10px;
`;

export default function DropdownList({ typeDescription, description }) {
  return (
    <Select>
      <option>{description}</option>
      {typeDescription.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </Select>
  );
}
