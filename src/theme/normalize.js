import { normalize } from "styled-normalize";

const init = `

${normalize}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: 100%;
  font-family: sans-serif;
}

#root {
  height: 100%;
}

`;

export default init;
