import styled from "styled-components/macro";
import { Box, Heading, Paragraph } from "~styled";
import { css } from "styled-components";

const Content = styled(Box)``;

Content.Title = styled(Heading)`

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.5rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2.125rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    `}

    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1.3125rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    `}

    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
    `}
    color:#000;
`;
Content.Text = styled(Paragraph)`
  ${(props) =>
    props.as === "p" &&
    css`
      font-size: 1rem;
      font-weight: 400;
      color: #000;
      text-align: justify;
    `}
`;

Content.List = styled(Box)`
  li {
    padding-left: 30px;
    position: relative;
    list-style: none;
    color: #000;
  }
`;

export default Content;
