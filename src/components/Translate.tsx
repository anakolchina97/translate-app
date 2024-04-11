import styled from "styled-components";
import { rem } from "polished";
import Lang from "./Lang";
import Textarea from "./Textarea";
import TextareaOutput from "./TextareaOutput";

const languages = [
  {
    name: "English",
  },
  {
    name: "French",
  },
  {
    name: "Spanish",
  },
];

interface ITranslate {
  setText: (text: string) => void;
  text?: string | undefined;
}

const Translate = ({ setText, text }: ITranslate) => {
  return (
    <TranslateWrap>
      <TranslateHeader>
        <TranslateHeaderTitle>Detect Language</TranslateHeaderTitle>
        <TranslateLanguages>
          {languages.map((language) => (
            <li key={language.name}>
              <Lang>{language.name}</Lang>
            </li>
          ))}
        </TranslateLanguages>
      </TranslateHeader>
      {text ? <TextareaOutput text={text} /> : <Textarea setText={setText} />}
    </TranslateWrap>
  );
};

const TranslateWrap = styled.div`
  padding: ${rem(16)};
  border-radius: ${rem(16)};
  background: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
`;

const TranslateHeader = styled.header`
  display: flex;
  gap: ${rem(16)};
  align-items: center;
  margin-bottom: ${rem(16)};
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TranslateHeaderTitle = styled.p``;

const TranslateLanguages = styled.ul`
  display: flex;
  gap: ${rem(16)};
`;

export default Translate;
