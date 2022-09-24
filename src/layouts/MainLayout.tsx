import React, {FC, PropsWithChildren} from 'react';
import {Outlet} from 'react-router-dom';
import styled from 'styled-components';
import {flex} from '../style/sharedStyles';

const MainLayout: FC<PropsWithChildren> = ({children}) => {
    return (
        <MainLayoutRoot>
            <MainLayoutContainer>
                <MainLayoutContent><Outlet/>{children}</MainLayoutContent>
            </MainLayoutContainer>
        </MainLayoutRoot>
    );
};

const MainLayoutRoot = styled.div`
  height: 100%;
  width: 100%;
`;

const MainLayoutContainer = styled(flex)`
  height: 100%;
  width: 100%;
`;

const MainLayoutContent = styled.div`
  flex-grow: 1;
  overflow: auto;
`;


export default MainLayout;
