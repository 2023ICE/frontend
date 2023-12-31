import styled from 'styled-components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { login_schema } from '../../utils/validation/Schema';
import { useCookies } from 'react-cookie';
import { loginUser } from '../../api/loginUser';
import AuthInput from '../ui/AuthInput';

const LogInForm = () => {
  const [Cookies, setCookie] = useCookies(['accessToken', 'name']);
  const [isOpen, setIsOpen] = useState({
    password: false,
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(login_schema),
    mode: 'onChange',
  });
  const value = watch();

  const toggleEye = (event) => {
    event.preventDefault();
    setIsOpen((prev) => ({ ...prev, password: !prev.password }));
  };

  const onSubmit = async (data) => {
    const loginResponse = await loginUser(data);

    if (loginResponse?.status === 200) {
      navigate('/allergies');
      await setCookie('accessToken', loginResponse.data.accessToken, {
        path: '/',
      });
      await setCookie('name', loginResponse.data.name, { path: '/' });
    } else {
      alert(loginResponse.response.data);
      setValue('username', '');
      setValue('password', '');
    }
  };

  return (
    <StyledLogInForm onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        id="username"
        name="username"
        value={value || ''}
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
        toggleEye={(event) => toggleEye(event)}
        eyeState={isOpen.password}
      />
      <SubmitBtn type="submit">로그인</SubmitBtn>
    </StyledLogInForm>
  );
};

const StyledLogInForm = styled.form`
  margin: 0 auto;
  width: calc(100vw - 40px);
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
export default LogInForm;
