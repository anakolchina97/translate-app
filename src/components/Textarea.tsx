import styled from "styled-components";
import { rem } from "polished";
import axios from "axios";

const Textarea = ({ setText }: { setText: (text: string) => void }) => {
  const getTranslate = async (value: string) => {
    const url = `https://api.mymemory.translated.net/get?q=${value}&langpair=ru|en`;
    const { data } = await axios.get(url);
    const { translatedText } = await data.responseData;
    setText(translatedText);
  };
  return (
    <>
      <TextareaWrap
        onChange={(e) => getTranslate(e.target.value)}
      ></TextareaWrap>
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
