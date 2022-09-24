import React, {FC, PropsWithChildren} from 'react';
import {Outlet} from "react-router-dom";
import styled from "styled-components";
import {flexColumn} from "../style/sharedStyles";

const LoginLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <LoginLayoutRoot><LogoContainer></LogoContainer><Content><Outlet/>{children}</Content></LoginLayoutRoot>
    );
};

const LoginLayoutRoot = styled(flexColumn)`
  height: 100%;
  width: 100%;
  overflow: auto;
`;

const LogoContainer = styled.div`
  margin: 50px auto;
  height: 46px;
  width: 190px;
  @media (max-width: 768px) {
    margin: 40px auto 20px;
  }
`;
const Content = styled.div`
  margin: 0 auto;
  padding: 40px 30px 30px;
`;


export default LoginLayout;
