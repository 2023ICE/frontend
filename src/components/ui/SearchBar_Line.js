import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { getSearch } from '../../api/getSearch';
import SEARCH_ICON from '../../assets/icons/search_pink.svg';

const SearchBarLine = ({
  setData,
  page,
  setPage,
  isLoading,
  setIsLoading,
  setErrorMsg,
  isLastPage,
  setIsLastPage,
  prevValue,
  setPrevValue,
  ...attrProps
}) => {
  const [cookies] = useCookies(['accessToken']);
  const [value, setValue] = useState('');

  const loadData = async () => {
    setIsLoading(true);
    setData([]);
    setErrorMsg('');
    setIsLastPage(false);
    setPage(1);
    setPrevValue(value);

    const responseData = await getSearch(cookies.accessToken, value, 1);

    setData(responseData);
    setIsLoading(false);

    // 잘못된 검색을 요청한 경우
    if (responseData?.code === 'ERR_BAD_REQUEST') {
      setData([]);
      setIsLoading(false);

      if (
        responseData?.response.data ===
        '레시피를 가져올 수 있는 페이지를 넘었습니다.'
      ) {
        setIsLastPage(true);
      }
      if (
        responseData?.response.data ===
        '검색어에 해당하는 레시피를 찾을 수 없습니다.'
      ) {
        setErrorMsg(responseData.response.data);
      }
    }
  };

  useEffect(() => {
    const reloadData = async () => {
      if (page === 1 || isLastPage) return;
      try {
        const responseData = await getSearch(cookies.accessToken, value, page);

        if (Array.isArray(responseData)) {
          setData((prevPostList) => [...prevPostList, ...responseData]);
          setErrorMsg('');
        }
        // 가져올 수 있는 페이지를 초과한 경우 (마지막 페이지)
        else if (responseData?.code === 'ERR_BAD_REQUEST') {
          setIsLoading(false);
          setIsLastPage(true);
          setErrorMsg('');
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
  }, [isLoading, page, prevValue]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setData([]);
    setIsLastPage(false);
    await loadData();
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
