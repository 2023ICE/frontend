import styled from 'styled-components';
import SearchResultBox from '../components/ui/SearchResultBox';
import SearchBar_Line from '../components/ui/SearchBar_Line';
import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [resultData, setResultData] = useState([]);
  const [isLoading, setIsLoading] = useState(undefined);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLastPage, setIsLastPage] = useState(false);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !isLastPage) {
          // 추가 데이터를 로드하는 로직
          setPage((prev) => prev + 1);
          setIsLoading(true);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading]
  );

  return (
    <ContentWrapper>
      <TiTle onClick={() => navigate('/')}>Aller Check</TiTle>
      <SearchBar_Line
        setData={setResultData}
        page={page}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setErrorMsg={setErrorMsg}
        setIsLastPage={setIsLastPage}
      />
      <ListWrapper>
        {errorMsg && <p>{errorMsg}</p>}

        {resultData && resultData.length > 0 && (
          <>
            {resultData?.map((data, index) => {
              if (resultData.length === index + 1) {
                return <div ref={lastElementRef} key={data.name}></div>;
              } else {
                return <SearchResultBox key={data.name} data={data} />;
              }
            })}
          </>
        )}
      </ListWrapper>
      {isLoading && <p>로딩중 !!</p>}
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;
const TiTle = styled.button`
  align-self: start;
  font-size: ${({ theme }) => theme.fontsize.TITLE};
  font-weight: ${({ theme }) => theme.fontweight.REGULAR};
  color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;
const ListWrapper = styled.div`
  padding: 10px 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: scroll;
`;

export default SearchPage;
