import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import theme from "./theme/theme";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AppRoot>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </AppRoot>
      </ThemeProvider>
    </RecoilRoot>
  );
}

const AppRoot = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  font-family: ${({ theme }) => theme.fontFamilies.regular};
  font-size: ${theme.fontSizes.text}px;
  cursor: default;
`;

export default App;
