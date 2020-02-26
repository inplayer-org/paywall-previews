import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ThemeWrapper, Grid, Button } from "@inplayer-org/inplayer-ui";
import { Preview1 } from "./index";
const { Container, Cell } = Grid;

const StyledContainer = styled(Container)`
  margin: 2rem;
`;

function App() {
  return (
    <ThemeWrapper withProvider={ThemeProvider}>
      <StyledContainer gap="1rem">
        <Cell width={2}>
          <Button disabled>Buy now</Button>
        </Cell>
        <Cell width={2}>
          <Button buttonModifiers={["buttonInfo"]}>Buy now</Button>
        </Cell>
        <Cell width={2}>
          <Button buttonModifiers={["buttonPrimary"]}>Buy now</Button>
        </Cell>
        <Cell width={2}>
          <Button buttonModifiers={["buttonWarning"]}>Buy now</Button>
        </Cell>
        <Cell width={2}>
          <Button buttonModifiers={["buttonSuccess"]}>Buy now</Button>
        </Cell>
        <Cell width={2}>
          <Button buttonModifiers={["buttonDanger"]}>Buy now</Button>
        </Cell>
      </StyledContainer>
      <Preview1 />
    </ThemeWrapper>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
