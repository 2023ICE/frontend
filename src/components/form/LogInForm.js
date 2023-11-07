import styled from 'styled-components';
import { useState } from 'react';
import AuthInput from '../ui/AuthInput';

const LogInForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleEye = () => {
    setIsOpen((prev) => !prev);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledLogInForm onSubmit={(e) => onSubmit(e)}>
      <AuthInput
        inputId="email"
        label="이메일"
        placeholder="이메일을 입력해주세요."
        type="email"
      />
      <AuthInput
        inputId="password"
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요."
        type={isOpen ? 'text' : 'password'}
        toggleEye={toggleEye}
        eyeState={isOpen}
      />
      <SubmitBtn type="submit">로그인</SubmitBtn>
    </StyledLogInForm>
  );
};

const StyledLogInForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;
const SubmitBtn = styled.button`
  width: 327px;
  height: 48px;
  margin-top: 10px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: white;
`;
export default LogInForm;
