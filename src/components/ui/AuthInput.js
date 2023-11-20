import styled from 'styled-components';
import HiddenBtn from './HiddenBtn';

const AuthInput = ({
  id,
  name,
  label,
  type,
  placeholder,
  register,
  errorMsg,
  toggleEye,
  eyeState,
}) => {
  let hasHiddenBtn = ['password', 'checkedPassword'].includes(id);
  return (
    <>
      <StyledInput>
        <Label htmlFor={id}>{label}</Label>
        <InputWrapper>
          <Input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            {...register(name)}
          />
          {hasHiddenBtn && (
            <HiddenBtn toggleEye={toggleEye} eyeState={eyeState} />
          )}
        </InputWrapper>
      </StyledInput>
      <p>{errorMsg && errorMsg}</p>
    </>
  );
};

const StyledInput = styled.div`
  width: 327px;
  height: 60px;
  padding: 10px 13px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: 8px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;
const Input = styled.input`
  width: 100%;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.GRAY};
  }
`;

export default AuthInput;
