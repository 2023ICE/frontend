import styled from 'styled-components';

const LogInInput = ({ inputId, label, type, placeholder }) => {
  return (
    <StyledInput>
      <Label htmlFor={inputId}>{label}</Label>
      <Input id={inputId} type={type} placeholder={placeholder} />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  width: 327px;
  height: 60px;
  padding: 15px 15px 0 15px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.LIGHT_GRAY};
  border-radius: 8px;
`;
const Label = styled.label`
  font-size: ${({ theme }) => theme.fontsize.SMALL_TXT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.LIGHT_GRAY};
`;
const Input = styled.input`
  height: 100%;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  border: none;
`;
export default LogInInput;
