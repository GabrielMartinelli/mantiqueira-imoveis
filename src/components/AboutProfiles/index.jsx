import React from "react";
import profile from "./profile.jpg";
import { styled } from "styled-components";

const SectionProfile = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 4rem 0;
  flex-wrap: wrap;
`;

const DivProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  img {
    width: 300px;
    height: 280px;
    border-radius: 50%;
  }

  h2 {
    font-size: 24px;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    color: grey;
  }
`;

export default function AboutProfiles() {
  return (
    <SectionProfile>
      <DivProfile>
        <img src={profile}></img>
        <h2>Fausto Braga</h2>
        <span>CRECI 45142</span>
      </DivProfile>
      <DivProfile>
        <img src={profile}></img>
        <h2>Rafael Rangel</h2>
        <span>CRECI 37791</span>
      </DivProfile>
      <DivProfile>
        <img src={profile}></img>
        <h2>Tiago Martinelli</h2>
        <span>CRECI 51338</span>
      </DivProfile>
    </SectionProfile>
  );
}
