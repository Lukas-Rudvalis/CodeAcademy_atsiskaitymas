import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
    }

    html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
    }

    p,
    li,
    a {
    font-size: 1.6rem;
    }

    button {
    cursor: pointer;
    }

    body {
    margin: 0;
    --black: #111;
    --dark-gray: #212121;
    --gray: #646464;
    --green: #37806b;
    --green-hover: #26584a;
    --brown: #caa892;
    --brown-hover: #b69783;
    }

    img {
    max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
    margin: 0;
    }

    a {
    text-decoration: none;
    color: inherit;
    }

    .flex{
      display: flex;
      justify-content: space-between;
    }

`;

export default GlobalStyle;
