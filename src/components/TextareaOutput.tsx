import styled from "styled-components";
import { rem } from "polished";

const TranslateOutput = ({ text }: { text: string }) => {
  return (
    <>
      <TextareaWrap>{text}</TextareaWrap>
    </>
  );
};

const TextareaWrap = styled.p`
  width: 100%;
  height: ${rem(200)};
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  border: none;
  outline: none;
  resize: none;
`;

export default TranslateOutput;
