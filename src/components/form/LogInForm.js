import styled from 'styled-components';
import { useState } from 'react';
import LogInInput from '../ui/LogInInput';

const LogInForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleEye = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <StyledLogInForm>
      <LogInInput
        inputId="email"
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
      />
      <LogInInput
        inputId="password"
        label="비밀번호"
        type={isOpen ? 'text' : 'password'}
        placeholder="비밀번호를 입력해주세요."
        toggleEye={toggleEye}
        eyeState={isOpen}
      />
      <SubmitBtn>로그인</SubmitBtn>
    </StyledLogInForm>
  );
};

const StyledLogInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const SubmitBtn = styled.button`
  width: 327px;
  height: 48px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: white;
`;
export default LogInForm;
