import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SignUpForm from '../components/form/SignUpForm';
import BACK_BTN_ICON from '../assets/icons/back_icon.svg';

const SignUpPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <GoLogInBtn onClick={() => navigate('/login')}>
        <img src={BACK_BTN_ICON} />
      </GoLogInBtn>
      <Title>회원 정보를 입력해주세요</Title>
      <SignUpForm />
    </>
  );
};
const GoLogInBtn = styled.button`
  width: 30px;
  height: 30px;
`;
const Title = styled.p`
  margin: 30px 0 50px;
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
`;
export default SignUpPage;
