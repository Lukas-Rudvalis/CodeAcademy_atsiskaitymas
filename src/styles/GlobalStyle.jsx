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
  --light-gray: #EEEEEE;
  --green: #37806b;
  --green-hover: #26584a;
  --brown: #caa892;
  --brown-hover: #a88b78;
  --error: #ec4848;
  }

  img {
  width: 100%;
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

  ul{
    list-style:none;
    padding: 0;
    margin: 0;
  }

  li{
    max-width:300px;
  }

  .mb20{
    margin-bottom: 20px;
  }
  .mt20{
    margin-top: 20px;
  }

  .flex{
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  
  .flex-form{
    display: flex;
    flex-direction: column;
    gap:10px;
    align-items:center;
  }

.tac{
  text-align: center;
}

`;

export default GlobalStyle;
