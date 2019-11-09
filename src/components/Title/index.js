import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  line-height: 40px;
  color: #011627;
`;

export default function Title({ text }) {
  return <StyledTitle data-testid="title">{text}</StyledTitle>;
}
