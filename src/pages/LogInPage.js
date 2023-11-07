import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LogInForm from '../components/form/LogInForm';

const LogInPage = () => {
  const navigate = useNavigate();
  return (
    <LogInBox>
      <Title>로그인</Title>
      <LogInForm />
      <SignUpBtn onClick={() => navigate('/join')}>회원가입</SignUpBtn>
    </LogInBox>
  );
};

const LogInBox = styled.div`
  margin: 230px auto 0;
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
  font-size: ${({ theme }) => theme.fontsize.MEDIUM_TXT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  color: ${({ theme }) => theme.colors.GRAY};
`;
export default LogInPage;
