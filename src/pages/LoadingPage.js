import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import styled from 'styled-components';
import Spinner from '../assets/icons/Spinner1.gif'


export const LoadingPage = () => {
    return(
        <PageLayout>
            <Title>로딩중 입니다</Title>
            <img src={Spinner} alt="로딩중" width="100%" />
            {/* <LoadingForm/> */}
        </PageLayout>
        
    );
};

const Title = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.S_TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
  margin-top: 120px;
`;


export default LoadingPage;