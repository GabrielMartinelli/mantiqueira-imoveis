import React from "react";
import { styled } from "styled-components";

const DivMap = styled.div`
  overflow: hidden;
  padding-bottom: 30.25%;
  position: relative;
  width: 50%;
`;

const MapIframe = styled.iframe`
  left: 0;
  top: 0;
  border: 0;
  height: 100%;
  width: 100%;
  position: absolute;
`;

export default function Map() {
  return (
    <DivMap>
      <MapIframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3697.5002527627976!2d-46.57559435433752!3d-22.068704435479262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c9bc433b59802d%3A0xc22c83839d1f3d31!2sPr.%20Dr.%20Alcides%20Mosconi%2C%2046%20-%20Andradas%2C%20MG%2C%2037795-000!5e0!3m2!1spt-BR!2sbr!4v1684330535364!5m2!1spt-BR!2sbr"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google maps"
      ></MapIframe>
    </DivMap>
  );
}
