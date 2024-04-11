import styled from "styled-components";
import { rem } from "polished";

const Textarea = ({ setText }: { setText: (text: string) => void }) => {
  return (
    <>
      <TextareaWrap onChange={(e) => setText(e.target.value)}></TextareaWrap>
    </>
  );
};

const TextareaWrap = styled.textarea`
  width: 100%;
  height: ${rem(200)};
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  border: none;
  outline: none;
  resize: none;
`;

export default Textarea;
