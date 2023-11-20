import styled from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signup_schema } from '../../utils/validation/Schema';
import AuthInput from '../ui/AuthInput';

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signup_schema),
    mode: 'onChange',
  });

  const [isOpen, setIsOpen] = useState({
    password: false,
    checkedPassword: false,
  });

  const toggleEye = (fieldName) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  const onSubmit = (data) => console.log(data);

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        id="name"
        name="name"
        label="이름"
        type="text"
        placeholder="이름을 입력해주세요."
        register={register}
        errorMsg={errors.name?.message}
      />
      <AuthInput
        id="username"
        name="username"
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
        register={register}
        errorMsg={errors.username?.message}
      />
      <AuthInput
        id="password"
        name="password"
        label="비밀번호"
        type={isOpen.password ? 'text' : 'password'}
        placeholder="비밀번호를 입력해주세요."
        register={register}
        errorMsg={errors.password?.message}
        toggleEye={() => toggleEye('password')}
        eyeState={isOpen.password}
      />
      <AuthInput
        id="checkedPassword"
        name="checkedPassword"
        label="비밀번호 재입력"
        type={isOpen.checkedPassword ? 'text' : 'password'}
        placeholder="비밀번호를 재입력해주세요"
        register={register}
        errorMsg={errors.checkedPassword?.message}
        toggleEye={() => toggleEye('checkedPassword')}
        eyeState={isOpen.checkedPassword}
      />
      <SubmitBtn type="submit">회원가입</SubmitBtn>
    </StyledSignUpForm>
  );
};

const StyledSignUpForm = styled.form`
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
export default SignUpForm;
