import React, {FC} from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";


const NotFound: FC = () => {
    const {t} = useTranslation();

    return (
        <NotFoundRoot>
            <NotFoundTitle>{t('notFound.title')}</NotFoundTitle>
            <NotFoundSubTitle>{t('notFound.subTitle')}</NotFoundSubTitle>

        </NotFoundRoot>
    );
};

const NotFoundRoot = styled.div`
  background-color: ${({theme}) => theme.colors.primaryBackground};
  padding: 40px 44px;
`;
const NotFoundTitle = styled.div`
  font-size: ${({theme}) => theme.fontSizes.title}px;
  padding-bottom: 30px;
`;
const NotFoundSubTitle = styled.div``;

export default NotFound;
