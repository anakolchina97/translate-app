import styled from "styled-components";
import Translate from "./Translate";
import { rem } from "polished";
import React from "react";

const Translates = () => {
  const [text, setText] = React.useState<string>("Translate");

  return (
    <TranslatesWrap>
      <Translate setText={setText} />
      <Translate text={text} setText={setText} />
    </TranslatesWrap>
  );
};

const TranslatesWrap = styled.div`
  display: grid;
  gap: ${rem(20)};
  grid-template-columns: repeat(2, ${rem(559)});
`;

export default Translates;
