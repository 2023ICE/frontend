import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import LogInForm from '../components/form/LogInForm';

const LogInPage = () => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <LogInBox>
        <Title>로그인</Title>
        <LogInForm />
        <SignUpBtn onClick={() => navigate('/signUp')}>회원가입</SignUpBtn>
      </LogInBox>
    </PageLayout>
  );
};

const LogInBox = styled.div`
  margin: 200px auto 0;
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  margin-bottom: 30px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
const SignUpBtn = styled.button`
  margin: 16px 25px 0 0;
  align-self: end;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.GRAY};
`;
export default LogInPage;
