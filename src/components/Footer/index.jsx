import React from "react";
import i18n from "../../i18n";
import { FooterContainer } from "./styles";

export default function Footer() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <FooterContainer>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("hi")}>Hindi</button>
    </FooterContainer>
  );
}
