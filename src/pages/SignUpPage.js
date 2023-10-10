import styled from 'styled-components';
import PageLayout from '../components/layout/PageLayout';

const SignUpPage = () => {
  return (
    <PageLayout>
      <Title>회원 정보를 입력해주세요</Title>
    </PageLayout>
  );
};

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
export default SignUpPage;
