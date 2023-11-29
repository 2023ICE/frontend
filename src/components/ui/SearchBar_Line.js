import styled from 'styled-components';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { getSearch } from '../../api/getSearch';
import SEARCH_ICON from '../../assets/icons/search_pink.svg';

const SearchBarLine = ({ setData, isLoading, setIsLoading, ...attrProps }) => {
  const [cookies] = useCookies(['accessToken']);
  const [value, setValue] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const responseData = await getSearch(cookies.accessToken, value);
    setData(responseData);
    setIsLoading(false);
  };

  return (
    <StyledInput {...attrProps} onSubmit={(e) => onSubmit(e)}>
      <Input
        autoFocus
        placeholder="메뉴명을 입력하세요."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">
        <img src={SEARCH_ICON} alt="검색 아이콘" />
      </button>
    </StyledInput>
  );
};

const StyledInput = styled.form`
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
