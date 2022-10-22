import Container from "@mui/material/Container";
import { useContext } from "react";
import { LanguageContext } from "../Language";

export function Header() {
  const languageContext = useContext(LanguageContext);

  return (
    <Container fixed>
      <div>{languageContext?.language}</div>
    </Container>
  );
}
