import styled from 'styled-components';
import SEARCH_ICON from '../../assets/icons/search_pink.svg';

const SearchBarLine = ({ ...attrProps }) => {
  return (
    <StyledInput {...attrProps}>
      <Input autoFocus placeholder="메뉴명을 입력하세요." />
      <img src={SEARCH_ICON} alt="검색 아이콘" />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  width: 100%;
  height: 60px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-self: center;
  gap: 15px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.MAIN_COLOR};
`;
const Input = styled.input`
  width: 100%;
  border: none;
  font-size: ${({ theme }) => theme.fontsize.DEFAULT};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.TEXT_BLACK};
`;

export default SearchBarLine;
