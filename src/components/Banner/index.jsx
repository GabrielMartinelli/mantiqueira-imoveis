import React from "react";
import background from "@/assets/background-banner.jpg";
import { styled } from "styled-components";

const Img = styled.img`
  opacity: 0.7;
  width: 100%;
`;

export default function Banner() {
  return <Img src={background} />;
}
