import styled from 'styled-components';
import HiddenBtn from './HiddenBtn';
import { useEffect, useState } from 'react';

const AuthInput = ({
  id,
  name,
  value,
  label,
  type,
  placeholder,
  register,
  errorMsg,
  toggleEye,
  eyeState,
}) => {
  let hasHiddenBtn = ['password', 'checkedPassword'].includes(id);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(errorMsg !== undefined);
  }, [errorMsg]);

  return (
    <>
      <StyledInput $isError={isError}>
        <Label htmlFor={id} $isError={isError}>
          {label}
        </Label>
        <InputWrapper>
          <Input
            id={id}
            name={name}
            value={value[name] || ''}
            type={type}
            placeholder={placeholder}
            {...register(name)}
          />
          {hasHiddenBtn && (
            <HiddenBtn
              toggleEye={(event) => toggleEye(event)}
              eyeState={eyeState}
            />
          )}
        </InputWrapper>
      </StyledInput>
      <HelperTxt $isError={isError}>{errorMsg && errorMsg}</HelperTxt>
    </>
  );
};

const StyledInput = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.colors.MAIN_COLOR : theme.colors.LIGHT_GRAY};
  border-radius: 8px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.MAIN_COLOR : theme.colors.LIGHT_GRAY};
`;
const Input = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY};
  }
`;
const HelperTxt = styled.p`
  margin-left: 10px;
  align-self: start;
  line-height: 16px;
  font-size: ${({ theme }) => theme.fontsize.MEDIUM_TXT};
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.MAIN_COLOR : theme.colors.LIGHT_GRAY};
`;
export default AuthInput;
