import React from "react";
import styled from "styled-components";
import { rem } from "polished";

interface ILang {
  children: React.ReactNode;
}

const Lang = ({ children }: ILang) => {
  return <LangButton>{children}</LangButton>;
};

const LangButton = styled.button`
  cursor: pointer;
  padding: ${rem(8)} ${rem(16)};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.greyLight};
  border-radius: ${rem(16)};
`;

export default Lang;
