import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;
}

html,
body {
  scroll-behavior: smooth;
}

:root {
  --white: #ffffff;
  --dark-blue: #1e2e3c;
  --black: #000000;
  --green: #0ca970;
  --dark-green: #06724a;
  --padding-top-header: 180px;
  --color-button: rgb(12, 169, 112, 0.8);
}

a,
input,
textarea {
  font-style: inherit;
  color: inherit;
  text-decoration: none;
}

button {
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  color: var(--white);
}


li {
  list-style: none;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  color: var(--white);
}

`;
