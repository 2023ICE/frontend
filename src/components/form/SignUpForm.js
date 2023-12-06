import styled from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { signup_schema } from '../../utils/validation/Schema';
import { signupUser } from '../../api/signupUser';
import AuthInput from '../ui/AuthInput';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
  const [isOpen, setIsOpen] = useState({
    password: false,
    checkedPassword: false,
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signup_schema),
    mode: 'onChange',
  });

  const value = watch();

  const toggleEye = (event, fieldName) => {
    event.preventDefault();
    setIsOpen((prevState) => ({
      ...prevState,
      [fieldName]: !prevState[fieldName],
    }));
  };

  const onSubmit = async (data) => {
    const signupResponse = await signupUser(data);
    console.log(signupResponse);

    if (signupResponse?.status === 201) {
      navigate('/login');
    } else {
      alert(signupResponse?.response?.data);
      setValue('name', '');
      setValue('username', '');
      setValue('password', '');
      setValue('checkedPassword', '');
    }
  };

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        id="name"
        name="name"
        value={value}
        setValue={setValue}
        label="이름"
        type="text"
        placeholder="이름을 입력해주세요."
        register={register}
        errorMsg={errors.name?.message}
      />
      <AuthInput
        id="username"
        name="username"
        value={value}
        setValue={setValue}
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
        register={register}
        errorMsg={errors.username?.message}
      />
      <AuthInput
        id="password"
        name="password"
        value={value || ''}
        setValue={setValue}
        label="비밀번호"
        type={isOpen.password ? 'text' : 'password'}
        placeholder="비밀번호를 입력해주세요."
        register={register}
        errorMsg={errors.password?.message}
        toggleEye={(event) => toggleEye(event, 'password')}
        eyeState={isOpen.password}
      />
      <AuthInput
        id="checkedPassword"
        name="checkedPassword"
        value={value || ''}
        setValue={setValue}
        label="비밀번호 재입력"
        type={isOpen.checkedPassword ? 'text' : 'password'}
        placeholder="비밀번호를 재입력해주세요"
        register={register}
        errorMsg={errors.checkedPassword?.message}
        toggleEye={(event) => toggleEye(event, 'checkedPassword')}
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
  width: 100%;
  height: 48px;
  margin-top: 10px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  font-weight: ${({ theme }) => theme.fontweight.SEMIBOLD};
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: white;
`;
export default SignUpForm;
