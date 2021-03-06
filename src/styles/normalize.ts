import { dimensions, fonts, colors, breakpoints } from './variables'
import { getEmSize } from './mixins'
import * as Helveticattf from '../fonts/helvetica-neue/HelveticaNeue.ttf'
import * as HelveticaLightttf from '../fonts/helvetica-neue/HelveticaNeue-Light.ttf'
import * as HelveticaLightItalicttf from '../fonts/helvetica-neue/HelveticaNeueLightItalic.ttf'

export default `
  @font-face {
    font-family: "Helvetica Neue";
    src: url(${Helveticattf}) format("truetype"),
    font-weight: 400;
	  font-style: normal;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${HelveticaLightttf}) format("truetype");
    font-weight: 200;
	  font-style: normal;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url(${HelveticaLightItalicttf}) format("truetype");
    font-weight: 200;
	  font-style: italic;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    font-weight: 200;
    color: ${colors.black};
    background-color: ${colors.white};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    background: black;
  }

  body::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }

  a {
    color: ${colors.brand};
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.ui.light};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${colors.ui.whisper};
        }
        tr {
          background-color: ${colors.ui.whisper};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: .5rem;
    color: ${colors.white};
    font-weight: 600;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
    font-family: ${fonts.serif};
  }

  h1 {
    margin-top: 0;
    letter-spacing: 12px;
    text-transform: uppercase;
    text-align: center;
    font-size: ${dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: ${colors.black};
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.ui.light};
    color: ${colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`
