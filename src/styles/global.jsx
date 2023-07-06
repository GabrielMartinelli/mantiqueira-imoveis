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
}

a,
button,
input,
textarea {
  font-style: inherit;
  color: inherit;
}

button {
  background-color: transparent;
  cursor: pointer;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  color: var(--white);
}

`;
