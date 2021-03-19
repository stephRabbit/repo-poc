import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle`
  ${({ theme }) => css`
    :root {
      --black: #0e141b;
      --grey: #182635;
      --pink: #ff0a78;
      --purple: #5773ff;
      --yellow: #ffe100;
      --white: #fff;
      --light-grey: #dfebf6;
      --dark-purple: #2c0b8e;
    }

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      background-color: ${theme.colors.bg};
      color: ${theme.colors.textColor};
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      line-height: 1.6;
      margin: 0;
      padding: 0;
    }

    a {
      box-shadow: 0px 1px 0px var(--purple);
      color: ${theme.colors.textColor};
      text-decoration: none;

      &:hover {
        box-shadow: 0px 2px 0px var(--purple);
        transition: box-shadow 100ms ease 0s;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: 'Oswald', sans-serif;
    }

    img {
      display: inline-block;
      vertical-align: middle;
    }
  `}
`
