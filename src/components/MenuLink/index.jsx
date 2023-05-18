import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const List = styled.li`
  margin: 0 0.5rem;
  cursor: pointer;
  font-size: 18px;
  padding: 8px;
  transition: all 0.3s ease;

  &:hover {
    letter-spacing: 2px;
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    margin-top: 4px;
    border-radius: 200px;
    background: linear-gradient(to right, rgba(30, 46, 60, 1) 0%, rgba(12, 169, 112, 1) 100%);
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export default function MenuLink({ name, path }) {
  return (
    <NavLink to={path}>
      <List>{name}</List>
    </NavLink>
  );
}
