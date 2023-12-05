import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { getSearch } from '../../api/getSearch';
import SEARCH_ICON from '../../assets/icons/search_pink.svg';

const SearchBarLine = ({
  setData,
  page,
  isLoading,
  setIsLoading,
  setErrorMsg,
  setIsLastPage,
  ...attrProps
}) => {
  const [cookies] = useCookies(['accessToken']);
  const [value, setValue] = useState('');

  useEffect(() => {
    const reloadData = async () => {
      try {
        const responseData =
          page !== 1 && (await getSearch(cookies.accessToken, value, page));

        if (Array.isArray(responseData)) {
          setData((prevPostList) => [...prevPostList, ...responseData]);
        }
        // 가져올 수 있는 페이지를 초과한 경우 (마지막 페이지)
        else if (responseData?.code === 'ERR_BAD_REQUEST') {
          setIsLoading(false);
          setErrorMsg(responseData?.response?.data);
          setIsLastPage(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    if (isLoading) {
      reloadData();
    }
  }, [isLoading, page, cookies.accessToken, value, setData]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsLastPage(false);
    const responseData = await getSearch(cookies.accessToken, value, 1);

    // 잘못된 검색을 요청한 경우
    if (responseData?.code === 'ERR_BAD_REQUEST') {
      setData([]);
      setIsLoading(false);
      setErrorMsg(responseData?.response?.data);
    }

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
