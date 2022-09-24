import React, { FC } from 'react';
import styled from 'styled-components';
import NotFound from '../components/404/NotFound';
import {Navigate, Route, Routes} from 'react-router-dom';
import LoginLayout from '../layouts/LoginLayout';
import MainLayout from '../layouts/MainLayout';
import LoginRoot from '../screens/login/LoginRoot';
import MainRoot from '../screens/main/MainRoot';
export enum LoginRoutesNames {
    Home = '/',
    Login = '/login',

}

export enum MembersRoutesNames {
    Main = '/main',
}

const Navigation: FC = () => {
    return <NavigationRoot>
        <Routes>
            <Route element={<LoginLayout/>}>
                <Route path="*" element={<NotFound/>}/>
                <Route path={LoginRoutesNames.Home} element={<Navigate replace to={LoginRoutesNames.Login}/>}/>
                <Route path={LoginRoutesNames.Login} element={<LoginRoot />}/>
            </Route>
        <Route element={<MainLayout/>}>
            <Route path={MembersRoutesNames.Main} element={<MainRoot />} />
        </Route>
        </Routes>
    </NavigationRoot>
}

const NavigationRoot = styled.div`
  height: 100%;
`

export default Navigation;
